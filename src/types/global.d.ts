type PageProps<
  Props = {},
  P = Record<string | string[]> | undefined,
  S = Record<string | string[]> | undefined,
> = Props & {
  params?: Promise<P>;
  searchParams?: Promise<S>;
};
