<template>
  <div class="min-h-screen bg-gray-900 p-4">
    <div class="max-w-6xl mx-auto grid gap-20 lg:gap-10">
      <div class="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-3">
          <img src="/ra-logo.png" alt="logo" class="w-10 rounded-full" />
          <h1 class="text-lg md:text-xl font-bold text-white">PA MAKINDE CHAPTER EXAM PREP</h1>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            :class="[
              activeTab === tab
                ? 'bg-blue-800 text-white font-bold'
                : 'bg-white text-gray-700 hover:bg-blue-200',
              'px-4 py-2 rounded shadow-md border cursor-pointer',
            ]"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <Toast :message="toastMessage" :type="toastType" v-show="toastMessage" />

      <div v-if="currentQuestion" class="bg-white p-6 rounded-xl shadow md:w-xl lg:w-3xl mx-auto">
        <p class="text-lg font-semibold mb-4">{{ currentQuestion.question }}</p>
        <div class="grid gap-3">
          <button
            v-for="(option, idx) in currentQuestion.options"
            :key="idx"
            @click="selectOption(option)"
            :class="[
              selected === option ? 'animate-wiggle' : '',
              isSubmitted
                ? option === currentQuestion.answer
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : selected === option
                    ? 'bg-red-100 border-red-600 text-red-700'
                    : 'bg-white'
                : selected === option
                  ? 'bg-blue-100 border-blue-500 text-blue-700'
                  : 'bg-white',
              'block w-full text-left px-4 py-2 border rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-50',
            ]"
          >
            <span class="font-bold">{{ optionsChar[idx] + '. ' }} </span>{{ option }}
          </button>
        </div>

        <div v-if="isSubmitted" class="mt-4 grid gap-4">
          <div>
            <h2 class="font-bold">Answer</h2>
            <p class="text-gray-600 text-sm">{{ currentQuestion.answer }}</p>
          </div>
          <div>
            <h2 class="font-bold">Explanation</h2>
            <p class="text-gray-600 text-sm">{{ currentQuestion.explanation }}</p>
          </div>
        </div>

        <div class="mt-6 flex justify-between">
          <button @click="prevQuestion" class="rounded px-4 py-2 text-white bg-gray-500">
            Previous
          </button>
          <div class="space-x-2">
            <button @click="skipQuestion" class="text-yellow-600">Skip</button>
            <button
              v-if="!isSubmitted"
              :disabled="!selected"
              @click="submitAnswer"
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              Submit
            </button>
            <button
              v-else
              @click="nextQuestion"
              class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-10 text-white">
        <h2 class="text-3xl font-bold mb-4">Congrats, you've completed this section 🎉</h2>
        <button
          @click="resetTab"
          class="bg-blue-600 text-white px-8 py-4 rounded-lg shadow hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Toast from './components/Toast.vue'
import { Icon } from '@iconify/vue'
import { raQuestions } from '../data/raQuestions.js'
import { currentAffairs } from '../data/currentAffairs.js'

interface Question {
  question: string
  options: string[]
  answer: string
  explanation: string
}

const tabs = ['Junior', 'Intermediate', 'RA Curriculum', 'Current Affairs'] as const
type Tab = (typeof tabs)[number]

const activeTab = ref<Tab>('Junior')
const currentIndex = ref<number>(0)
const selected = ref<string | null>(null)
const isSubmitted = ref<boolean>(false)
const toastMessage = ref<string | null>(null)
const toastType = ref<'success' | 'error' | 'info'>('success')
const optionsChar = ['A', 'B', 'C', 'D']

const currentSet = computed<Question[]>(() => {
  const normalizeQuestions = (questions: any[]): Question[] =>
    questions.map((q) => ({
      ...q,
      options: q.options || [],
    }))

  switch (activeTab.value) {
    case 'Junior':
      return normalizeQuestions(raQuestions.junior)
    case 'Intermediate':
      return normalizeQuestions(raQuestions.intermediate)
    case 'RA Curriculum':
      return normalizeQuestions(raQuestions.raCurriculum)
    case 'Current Affairs':
      return normalizeQuestions(currentAffairs)
    default:
      return []
  }
})

const currentQuestion = computed<Question>(() => currentSet.value?.[currentIndex.value])

const selectOption = (option: string) => {
  if (!isSubmitted.value) selected.value = option
}

const submitAnswer = () => {
  if (!currentQuestion.value) return
  if (selected.value === currentQuestion.value?.answer) {
    toastMessage.value = 'Correct!'
    toastType.value = 'success'
  } else {
    toastMessage.value = 'Oops! That’s incorrect.'
    toastType.value = 'error'
  }
  isSubmitted.value = true
  setTimeout(() => (toastMessage.value = null), 3000)
}

const nextQuestion = () => {
  if (!currentSet.value) return
  if (currentIndex.value < currentSet.value.length - 1) {
    currentIndex.value++
    selected.value = null
    isSubmitted.value = false
  } else {
    currentIndex.value++
  }
}

const prevQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    selected.value = null
    isSubmitted.value = false
  }
}

const skipQuestion = () => {
  toastMessage.value = 'Skipped — here’s the correct answer.'
  toastType.value = 'info'
  isSubmitted.value = true
  setTimeout(() => (toastMessage.value = null), 3000)
}

const resetTab = () => {
  currentIndex.value = 0
  selected.value = null
  isSubmitted.value = false
  toastMessage.value = null
}

watch(activeTab, resetTab)
</script>

<style>
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
}
.animate-wiggle {
  animation: wiggle 0.2s ease-in-out 2;
}
</style>
