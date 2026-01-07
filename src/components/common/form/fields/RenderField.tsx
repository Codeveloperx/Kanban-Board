import { getFieldRenderer, type FieldProps } from "./getFieldRenderer";
import { memo } from "react";

export const RenderField = memo((props: FieldProps) => {
  const Renderer = getFieldRenderer(props.field.type);

  if (!Renderer) {
    console.warn(
      `⚠️ El tipo de campo "${props.field.type}" no está registrado`
    );
    return null;
  }

  return <Renderer {...props} />;
});
