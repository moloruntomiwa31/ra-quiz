<template>
  <div class="min-h-screen bg-gray-900 p-4">
    <Toast :message="toastMessage" :type="toastType" v-show="toastMessage" />

    <div class="max-w-6xl mx-auto grid gap-10 lg:gap-10">
      <div class="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-3">
          <img src="/ra-logo.png" alt="logo" class="w-8 md:w-10 object-cover rounded-full" />
          <h1 class="text-sm md:text-xl font-bold text-white">PA MAKINDE CHAPTER EXAM PREP</h1>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            v-for="tab in topLevelTabs"
            :key="tab"
            @click="selectTopTab(tab)"
            :class="[
              activeTopTab === tab
                ? 'bg-blue-800 text-white font-bold'
                : 'bg-white text-gray-700 hover:bg-blue-200',
              'px-4 py-2 rounded shadow-md border cursor-pointer',
            ]"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <div v-if="showRankSelector" class="mt-4 lg:mt-0 max-w-4xl mx-auto w-full">
        <h2 class="text-center text-lg font-semibold text-white mb-4">
          Select a Rank for {{ activeTopTab }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            v-for="(rankName, rankKey) in availableRanks"
            :key="rankKey"
            @click="selectRank(rankKey as RankKey)"
            :class="[
              selectedRankKey === rankKey
                ? 'bg-purple-700 text-white font-bold ' // Highlight selected rank
                : 'bg-gray-500 text-gray-100 hover:bg-gray-800',
              'px-4 py-2 rounded shadow-md border cursor-pointer transition-colors duration-200',
            ]"
          >
            {{ rankName }}
          </button>
        </div>
      </div>

      <div
        v-if="showQuestionArea && currentQuestion"
        class="bg-white p-6 rounded-xl shadow w-[95%] md:w-xl lg:w-3xl mx-auto"
      >
        <div class="flex justify-between items-center mb-4">
          <span class="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
            {{ activeTopTab }}{{ selectedRankKey ? ' - ' + formatRankKey(selectedRankKey) : '' }}
          </span>
          <span class="text-lg font-bold text-gray-800"
            >{{ currentIndex + 1 }}/{{ currentSet.length }}</span
          >
        </div>

        <p class="text-lg font-semibold mb-4">{{ currentQuestion.question }}</p>

        <div class="grid gap-3">
          <button
            v-for="(option, idx) in currentQuestion.options"
            :key="idx"
            @click="selectOption(option)"
            :disabled="isSubmitted"
            :class="[
              selectedOption === option ? 'animate-wiggle' : '', // Wiggle on selection before submit
              isSubmitted // Styles after submission
                ? option === currentQuestion.answer
                  ? 'bg-green-100 border-green-600 text-green-700 font-semibold' // Correct answer
                  : selectedOption === option
                    ? 'bg-red-100 border-red-600 text-red-700' // Incorrectly selected answer
                    : 'bg-white text-gray-500 border-gray-300' // Other incorrect options
                : selectedOption === option // Styles before submission
                  ? 'bg-blue-100 border-blue-500 text-blue-700' // Currently selected option
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-50', // Default option style
              'text-sm block w-full text-left px-4 py-2 border rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed',
            ]"
          >
            <span class="font-bold">{{ optionsChar[idx] + '. ' }} </span>{{ option }}
          </button>
        </div>

        <div
          v-if="isSubmitted"
          class="mt-4 grid gap-4 bg-gray-50 p-4 rounded-md border border-gray-200"
        >
          <div>
            <h2 class="font-bold text-green-700">Answer</h2>
            <p class="text-gray-700 text-sm">{{ currentQuestion.answer }}</p>
          </div>
          <div>
            <h2 class="font-bold text-gray-800">Explanation</h2>
            <p class="text-gray-600 text-sm">{{ currentQuestion.explanation }}</p>
          </div>
        </div>

        <div class="mt-6 flex justify-between items-center">
          <button
            @click="prevQuestion"
            :disabled="currentIndex === 0"
            class="rounded px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <div class="space-x-2 flex items-center">
            <button
              @click="skipQuestion"
              :disabled="isSubmitted"
              class="text-yellow-600 hover:text-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
            >
              Skip
            </button>
            <button
              v-if="!isSubmitted"
              :disabled="!selectedOption"
              @click="submitAnswer"
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
            <button
              v-else
              @click="nextQuestion"
              class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              {{ currentIndex < currentSet.length - 1 ? 'Continue' : 'Finish' }}
            </button>
          </div>
        </div>
      </div>

      <div
        v-else-if="showQuestionArea && !currentQuestion && currentSet.length > 0"
        class="text-center py-10 text-white"
      >
        <h2 class="text-3xl font-bold mb-4">Congrats, you've completed this section 🎉</h2>
        <p class="mb-6">
          You finished the questions for {{ activeTopTab
          }}{{ selectedRankKey ? ' - ' + formatRankKey(selectedRankKey) : '' }}.
        </p>
        <button
          @click="resetQuizState"
          class="bg-blue-600 text-white px-8 py-4 rounded-lg shadow hover:bg-blue-700"
        >
          Retry {{ activeTopTab
          }}{{ selectedRankKey ? ' (' + formatRankKey(selectedRankKey) + ')' : '' }}
        </button>
        <button
          v-if="selectedRankKey"
          @click="goBackToRankSelection"
          class="ml-4 bg-gray-500 text-white px-6 py-4 rounded-lg shadow hover:bg-gray-600"
        >
          Back to {{ activeTopTab }} Ranks
        </button>
      </div>

      <div v-else-if="!showRankSelector && !showQuestionArea" class="text-center py-10 text-white">
        <h2 class="text-2xl font-semibold">Select a category above to begin.</h2>
        <p class="text-gray-400">Choose Junior or Intermediate to select a specific rank.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Toast from './components/Toast.vue'
import { raQuestions } from '../data/raQuestions.ts'
import { currentAffairs } from '../data/currentAffairs.ts'

interface Question {
  question: string
  options: string[]
  answer: string
  explanation: string
}

// Define Top Level Tabs
const topLevelTabs = ['Junior', 'Intermediate', 'RA Curriculum', 'Current Affairs']
type TopLevelTab = (typeof topLevelTabs)[number]

// Rank Keys
type JuniorRankKey = keyof typeof raQuestions.junior
type IntermediateRankKey = keyof typeof raQuestions.intermediate
type RankKey = JuniorRankKey | IntermediateRankKey | null

const activeTopTab = ref<TopLevelTab | null>(null) // Start with no tab selected
const selectedRankKey = ref<RankKey>(null) // assistantIntern', 'envoy', null
const currentIndex = ref(0)
const selectedOption = ref<string | null>(null)
const isSubmitted = ref(false)
const toastMessage = ref<string | null>(null)
const toastType = ref<'success' | 'error' | 'info'>('success')

const optionsChar = ['A', 'B', 'C', 'D']

// Determine available ranks based on the active top tab
const availableRanks = computed<Record<string, string>>(() => {
  let ranks: Record<string, string> = {}

  if (activeTopTab.value === 'Junior') {
    ranks = Object.entries(raQuestions.junior).reduce(
      (acc, [key, _]) => {
        acc[key] = formatRankKey(key as JuniorRankKey) // Format rank key
        return acc
      },
      {} as Record<string, string>,
    )
  } else if (activeTopTab.value === 'Intermediate') {
    ranks = Object.entries(raQuestions.intermediate).reduce(
      (acc, [key, _]) => {
        acc[key] = formatRankKey(key as IntermediateRankKey) // Format rank key
        return acc
      },
      {} as Record<string, string>,
    )
  }

  return ranks
})

// Show rank selector if Junior/Intermediate is active and no rank is selected yet
const showRankSelector = computed(() => {
  return (
    (activeTopTab.value === 'Junior' || activeTopTab.value === 'Intermediate') &&
    !selectedRankKey.value
  )
})

// Show the main question area if a rank OR a direct tab is selected
const showQuestionArea = computed(() => {
  if (activeTopTab.value === 'Junior' || activeTopTab.value === 'Intermediate') {
    return !!selectedRankKey.value // Show only if a rank is selected
  }
  if (activeTopTab.value === 'RA Curriculum' || activeTopTab.value === 'Current Affairs') {
    return true // Show immediately for direct tabs
  }
  return false // Don't show if no top tab selected
})

// Get the current set of questions based on selections
const currentSet = computed<Question[]>(() => {
  const normalizeQuestions = (questions: any[] | undefined): Question[] =>
    (questions || []).map((q) => ({
      ...q,
      options: q.options || [], // Ensure options exist
    }))

  if (activeTopTab.value === 'Junior' && selectedRankKey.value) {
    return normalizeQuestions(raQuestions.junior[selectedRankKey.value as JuniorRankKey])
  }
  if (activeTopTab.value === 'Intermediate' && selectedRankKey.value) {
    return normalizeQuestions(
      raQuestions.intermediate[selectedRankKey.value as IntermediateRankKey],
    )
  }
  if (activeTopTab.value === 'RA Curriculum') {
    // Assuming raQuestions has a top-level raCurriculum key like the original example
    return normalizeQuestions((raQuestions as any).raCurriculum) // Use 'any' if structure varies, or adjust import
  }
  if (activeTopTab.value === 'Current Affairs') {
    return normalizeQuestions(currentAffairs)
  }
  return [] // Return empty array if no valid selection
})

// Get the current question object
const currentQuestion = computed<Question | undefined>(() => currentSet.value?.[currentIndex.value])

// Helper to format rank keys (e.g., 'assistantIntern' -> 'Assistant Intern')
function formatRankKey(key: RankKey): string {
  if (!key) return ''
  // Simple camelCase to Title Case converter
  const result = key.replace(/([A-Z])/g, ' $1')
  return result.charAt(0).toUpperCase() + result.slice(1)
}

// Reset quiz state (index, selection, submission status)
const resetQuizState = () => {
  currentIndex.value = 0
  selectedOption.value = null
  isSubmitted.value = false
  toastMessage.value = null
}

// Select a top-level tab
const selectTopTab = (tab: TopLevelTab) => {
  activeTopTab.value = tab
  selectedRankKey.value = null // Always reset rank when changing top tab
  resetQuizState()
}

// Select a specific rank within Junior/Intermediate
const selectRank = (rankKey: RankKey) => {
  selectedRankKey.value = rankKey
  resetQuizState() // Reset index etc. when a rank is chosen
}

// Go back from quiz view to rank selection for Junior/Intermediate
const goBackToRankSelection = () => {
  selectedRankKey.value = null // Clear the selected rank
  resetQuizState()
}

// Select an answer option
const selectOption = (option: string) => {
  if (!isSubmitted.value) {
    selectedOption.value = option
  }
}

// Submit the selected answer
const submitAnswer = () => {
  if (!selectedOption.value || !currentQuestion.value) return // Ensure an option is selected
  if (selectedOption.value === currentQuestion.value.answer) {
    toastMessage.value = 'Correct!'
    toastType.value = 'success'
  } else {
    toastMessage.value = 'Oops! That’s incorrect.'
    toastType.value = 'error'
  }
  isSubmitted.value = true
  setTimeout(() => (toastMessage.value = null), 3000) // hide toast
}

// Move to the next question or finish
const nextQuestion = () => {
  if (!currentSet.value) return
  if (currentIndex.value < currentSet.value.length - 1) {
    currentIndex.value++
    selectedOption.value = null
    isSubmitted.value = false
  } else {
    // Reached the end
    currentIndex.value++
    selectedOption.value = null
    isSubmitted.value = false
  }
}

// Move to the previous question
const prevQuestion = () => {
  if (currentIndex.value > 0) {
    if (currentIndex.value >= currentSet.value.length) {
      currentIndex.value = currentSet.value.length - 1
    } else {
      currentIndex.value--
    }
    selectedOption.value = null
    isSubmitted.value = false
  }
}

// Skip the current question
const skipQuestion = () => {
  if (!currentQuestion.value || isSubmitted.value) return // Don't skip if already submitted
  toastMessage.value = 'Skipped — here’s the correct answer.'
  toastType.value = 'info'
  isSubmitted.value = true // Show the answer immediately
  setTimeout(() => (toastMessage.value = null), 3000)
}
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
  animation: wiggle 0.2s ease-in-out;
}
</style>
