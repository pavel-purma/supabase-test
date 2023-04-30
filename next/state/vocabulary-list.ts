import { create } from 'zustand'

interface VocabularyListEntity {
    create: (entity: VocabularyList) => void
}

const useVocabularyListEntity = create((set) => ({
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))
