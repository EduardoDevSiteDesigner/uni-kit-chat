CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quantity INTEGER NOT NULL,
  kit TEXT NOT NULL,
  sponsors INTEGER NOT NULL DEFAULT 0,
  cep TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.leads
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts" ON public.leads
  FOR INSERT TO authenticated WITH CHECK (true);