export const pluckMessage = async (event: MessageEvent<any>) => {
  return await new Response(event?.data).text();
};
