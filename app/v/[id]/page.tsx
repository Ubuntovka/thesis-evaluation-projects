import { notFound } from "next/navigation";
import { AlphaView } from "./AlphaView";
import { BetaView } from "./BetaView";
import { screens } from "./experiment";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(screens).map((id) => ({ id }));
}

export default async function ExperimentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const screen = screens[id];

  if (!screen) notFound();

  return screen.product === "alpha" ? (
    <AlphaView condition={screen.condition} />
  ) : (
    <BetaView condition={screen.condition} />
  );
}
