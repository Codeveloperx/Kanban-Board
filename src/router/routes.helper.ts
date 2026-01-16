export const route = {
  boards: () => "/boards",
  detail: (id: string) => `/boards/${id}`,
  create: () => "/boards?mode=create",
  edit: (id: string) => `/boards?mode=edit&boardId=${id}`,
};
