import Header from "@/app/(landing)/components/header";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main >{children}</main>
    </>
  );
}