import classNames from 'classnames';
import React from 'react';
import Button from './Button';
import Overlay, { type OverlayProps } from './Overlay';
import ProgressiveImage, { type ProgressiveImageProps } from './ProgressiveImage'; // prettier-ignore

type Image = string | ProgressiveImageProps;

export type LightboxProps = {
  className?: string;
  currentIndex?: number;
  hidePagination?: boolean;
  images?: Image[];
  loop?: boolean;
  onChangeImage?: (newIndex: number) => void;
  rounded?: boolean;
} & Omit<
  OverlayProps,
  | 'children'
  | 'closeOnScrimClick'
  | 'dialogClassName'
  | 'dialogZIndex'
  | 'theme'
>;

export default function Lightbox({
  animated = true,
  className,
  currentIndex = 0,
  hidePagination,
  images,
  loop = false,
  onChangeImage,
  onRequestClose,
  rounded,
  scrimColor = 'auto',
  ...rest
}: LightboxProps) {
  const currentImage =
    images && currentIndex >= 0 && currentIndex < images.length
      ? images[currentIndex]
      : null;
  const imageProps =
    typeof currentImage === 'object' ? currentImage : { src: currentImage };
  return (
    <Overlay
      animated={animated}
      className={classNames('lightbox', className)}
      closeOnScrimClick={false}
      dialogClassName="lightbox__dialog"
      onRequestClose={onRequestClose}
      scrimColor={scrimColor}
      {...rest}
    >
      <div className="lightbox__container">
        <ProgressiveImage
          animated={animated}
          className={classNames('lightbox__image', 'shadow-lg', {
            'rounded-xl': rounded,
          })}
          objectFit="cover"
          {...imageProps}
        />
        {!hidePagination && images && images.length > 1 && (
          <div aria-hidden className="lightbox__pagination">
            {Array.from({ length: images.length }).map((_, index) => (
              <div
                key={index}
                className={classNames('lightbox__pagination-dot', {
                  selected: index === currentIndex,
                })}
              />
            ))}
          </div>
        )}
      </div>
      <div className="lightbox__buttons">
        <Button
          aria-label="Previous"
          className="lightbox__previous"
          disabled={!images || (!loop && currentIndex <= 0)}
          icon="arrow_back_ios"
          iconAlignment="only"
          iconProps={{ size: 'lg' }}
          onClick={() => {
            if (onChangeImage) {
              if (loop) {
                onChangeImage(
                  (currentIndex - 1 + images!.length) % images!.length,
                );
              } else if (currentIndex > 0) {
                onChangeImage(currentIndex - 1);
              }
            }
          }}
          variant="unstyled"
        />
        <Button
          aria-label="Next"
          className="lightbox__next"
          disabled={!images || (!loop && currentIndex >= images.length - 1)}
          icon="arrow_forward_ios"
          iconAlignment="only"
          iconProps={{ size: 'lg' }}
          onClick={() => {
            if (onChangeImage) {
              if (loop) {
                onChangeImage((currentIndex + 1) % images!.length);
              } else if (currentIndex < images!.length - 1) {
                onChangeImage(currentIndex + 1);
              }
            }
          }}
          variant="unstyled"
        />
        <Button
          aria-label="Close"
          className="lightbox__close"
          icon="close"
          iconAlignment="only"
          iconProps={{ size: 'lg' }}
          onClick={onRequestClose}
          variant="unstyled"
        />
      </div>
    </Overlay>
  );
}
