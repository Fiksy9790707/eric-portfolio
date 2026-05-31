export type VercelRequest = {
  method?: string;
  body?: unknown;
};

export type VercelResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponse;
  json(body: unknown): void;
};
