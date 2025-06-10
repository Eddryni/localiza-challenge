import { queryClient, getProductById } from "@services/index";
import { dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{ id: string }> = async (context) => {
  const id = context.params?.id as string;


  await queryClient.prefetchQuery({
    queryKey: ['sorvete', id],
    queryFn: () => getProductById(id),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
};