"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

/**
 * Aspect ratio container — maintains consistent proportions.
 *
 * @example
 * <AspectRatio ratio={16 / 9}>
 *   <img src="/photo.jpg" alt="Photo" className="object-cover w-full h-full rounded-lg" />
 * </AspectRatio>
 */
const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
