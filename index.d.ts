declare module 'router' {
  const router: (path: string) => Promise<void>;
  export default router;
}
