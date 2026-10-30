import { VisitorWidget } from "@/components/visitor/visitor-widget";
import { visitorContent } from "@/content/site";

export function VisitorFeature() {
  return <VisitorWidget {...visitorContent} />;
}
