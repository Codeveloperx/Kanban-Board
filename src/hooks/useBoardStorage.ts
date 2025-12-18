import type { Board } from "../types/Board";
import type { BoardState as Boards } from "../types/BoardState";

const STORAGE_KEY = "kanban_boards";

export const useBoardStorage = () => {
  const load = (): Boards | null => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return null;

      const parsed = JSON.parse(data);
      console.log("Boards loaded from localStorage:", parsed);
      return parsed;
    } catch (error) {
      console.error("Error loading boards from localStorage:", error);
      return null;
    }
  };

  const save = (boards: Boards): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(boards));
      console.log("Boards saved to localStorage:", boards);
    } catch (error) {
      console.log(
        "An error occurred while saving the data to localStorage:",
        error
      );
    }
  };

  const getBoard = (id: string): Board | null => {
    const state = load();
    if (state) {
      const board = state.boards.find((b) => b.id === id);
      return board || null;
    }
    return null;
  };

  return {
    load,
    save,
    getBoard,
  };
};
