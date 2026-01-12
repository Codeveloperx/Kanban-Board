export const route = {
  boards: () => "/boards",
  detail: (id: string) => `/boards/${id}`,
  create: () => "/boards?mode=create",
  update: (id: string) => `/boards?mode=update&boardId=${id}`,
};
