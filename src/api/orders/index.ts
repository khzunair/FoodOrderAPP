import { supabase } from "@/src/lib/supabase";
import { useQuery } from "@tanstack/react-query";


// Fetching the list of products
export const useOrdersList = () => {
    const {
      error,
      data: products,
      isLoading,
    } = useQuery({
      queryKey: ["orders"],
      queryFn: async () => {
        const { data, error } = await supabase.from("orders").select("*");
        if (error) {
          throw new Error(error.message);
        }
        return data;
      },
    });
  
    return { error, data: products, isLoading };
  };
  