import OrderDetail from "@/features/account/_components/OrderDetail";

interface OrderDetailPageProps {
  params: Promise<{ id: string }>;
}

const OrderDetailPage = async ({ params }: OrderDetailPageProps) => {
  const { id } = await params;
  
  return <OrderDetail orderId={id} />;
};

export default OrderDetailPage;