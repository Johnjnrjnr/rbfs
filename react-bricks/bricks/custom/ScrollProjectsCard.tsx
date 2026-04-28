import { File, Image, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'
import {backgroundColorsEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";

export interface ScrollProjectCardProps {
  title: types.TextValue
  description: types.TextValue
  dateLabel: types.TextValue
  dateValue: types.TextValue
  leadLabel: types.TextValue
  leadValue: types.TextValue
  buttonText: types.TextValue
  buttonLinkText: types.TextValue

  showButtonRow: boolean
  backgroundColor: { color: string; className: string }

  hasVideo: boolean
  video: types.IFileSource
  videoWidth: number
  videoRounded: boolean
  videoBottomSpace: number
  videoAspectRatio: number
  videoResizesCard: boolean
  autoPlay: boolean
  loop: boolean
  muted: boolean
  controls: boolean

  hasIcon: boolean
  icon: types.IImageSource
  iconSize: number
  iconRounded: boolean
}

const ScrollProjectCard: types.Brick<ScrollProjectCardProps> = ({
  title,
  description,
  dateLabel,
  dateValue,
  leadLabel,
  leadValue,
  buttonText,
  buttonLinkText,
  showButtonRow,
    backgroundColor,
  hasVideo,
  video,
  videoWidth,
  videoRounded,
  videoBottomSpace,
  videoAspectRatio,
  videoResizesCard,
  autoPlay,
  loop,
  muted,
  controls,
  hasIcon,
  icon,
  iconSize,
  iconRounded,
  ...rest
}) => {
  const mediaBlock = hasVideo ? (
    <div
      style={{
        marginBottom: `${videoBottomSpace}px`,
      }}
    >
      <File
        propName="video"
        source={video}
        allowedExtensions={['.mp4', '.webm', '.mov']}
        renderBlock={(file) =>
          file ? (
            <div
              className="overflow-hidden "
              style={{
                width: '100%',
                aspectRatio: `${videoAspectRatio}`,
                borderRadius: videoRounded ? '20px' : '0px',
              }}
            >
              <video
                src={file.url}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                controls={controls}
                playsInline
                className="h-full w-full object-cover"
                style={{borderRadius: videoRounded ? '20px' : '0px'}}
              />
            </div>
          ) : (
            <div
              className="flex items-center justify-center bg-neutral-800 text-white"
              style={{
                width: '100%',
                aspectRatio: `${videoAspectRatio}`,
                borderRadius: videoRounded ? '20px' : '0px',
              }}
            >
              No video uploaded
            </div>
          )
        }
      />
    </div>
  ) : null

  const cardWidth = videoResizesCard
    ? `${Math.max(300, Math.min(videoWidth, 900))}px`
    : undefined

  return (
    <article
      {...rest}
      className={"w-[380px] rounded-[28px] p-5 md:w-[var(--card-width)] " + backgroundColor?.className}
      style={{
        "--card-width": cardWidth,
      } as React.CSSProperties}
    >
      {mediaBlock}

      <div className="mb-6 flex h-full items-start justify-between gap-4 pl-[20px] pr[20px]">
        <div className="min-w-0 flex-1">
          <TypographyRichTextExt
            propName="title"
            value={title}
            placeholder="Project title"
          />
        </div>

        {hasIcon ? (
          <div className="shrink-0 mr-[20px]">
            <Image
              propName="icon"
              source={icon}
              alt="Icon"
              maxWidth={iconSize}
              imageStyle={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                display: 'block',
                objectFit: 'cover',
                borderRadius: iconRounded ? '9999px' : '0px',
              }}
            />
          </div>
        ) : null}
      </div>

      <div className="mb-6 grid grid-row-rev md:grid-cols-[1fr_auto] gap-6 pl-[20px] pr-[20px]">
        <div>
          <TypographyRichTextExt
            propName="description"
            value={description}
            placeholder="Project description"
          />
        </div>

        <div className="min-w-[110px] text-right">
          <div className="mb-4">
            <TypographyRichTextExt
              propName="dateLabel"
              value={dateLabel}
              placeholder="Date label"
            />
            <TypographyRichTextExt
              propName="dateValue"
              value={dateValue}
              placeholder="Date"
            />
          </div>

          <div>
            <TypographyRichTextExt
              propName="leadLabel"
              value={leadLabel}
              placeholder="Lead label"
            />
            <TypographyRichTextExt
              propName="leadValue"
              value={leadValue}
              placeholder="Lead name"
            />
          </div>
        </div>
      </div>

      {showButtonRow ? (
          <div className=" justify-self-end self-end items-end align-self-end">
            <div className="flex justify-self-end-safe gap-3 ml-[20px]">
              <div className="rounded-full grid grid-cols-2 gap-10 justify-between content-center bg-neutral-500 pl-4 pr-1 py-1 text-white">
                <div className="flex flex-col justify-center ">
                  <TypographyRichTextExt
                    propName="buttonText"
                    value={buttonText}
                    placeholder="Button text"
                  />
                </div>

                <div className="rounded-full bg-[#0400FF] px-4 py-2 text-white align-middle">
                  <TypographyRichTextExt
                      propName="buttonLinkText"
                      value={buttonLinkText}
                      placeholder="Button link text"
                  />
                </div>
              </div>
            </div>
          </div>
      ) : null}
    </article>
  )
}

ScrollProjectCard.schema = {
  name: 'scroll-project-card',
  label: 'Scroll Project Card',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    title: '7 Imagefilme für Burghof',
    description:
      'Jedes Event hat seinen eigenen Rhythmus und genau diesen halten wir fest. Mit Gespür für Atmosphäre, Menschen und entscheidende Momente entstehen Bilder.',
    dateLabel: 'August',
    dateValue: 'August 2025',
    leadLabel: 'Projektleiter:',
    leadValue: 'Alexander Dimitriou',
    buttonText: 'Jetzt Einzelfall ansehen',
    buttonLinkText: 'Zur Webseite',

    showButtonRow: true,
    backgroundColor: {color: "white", className: "bg-white"},

    hasVideo: true,
    videoWidth: 420,
    videoRounded: true,
    videoBottomSpace: 16,
    videoAspectRatio: 1.4,
    videoResizesCard: false,
    autoPlay: true,
    loop: true,
    muted: true,
    controls: false,

    hasIcon: true,
    iconSize: 26,
    iconRounded: true,
  }),
  sideEditProps: [
    {
      groupName: 'Project Card',
      props: [
        {
          name: 'showButtonRow',
          label: 'Show Button Row',
          type: types.SideEditPropType.Boolean,
        },
          backgroundColorsEditProps
      ],
    },
    {
      groupName: 'Video',
      props: [
        {
          name: 'hasVideo',
          label: 'Has Video',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'videoResizesCard',
          label: 'Video Resizes Card',
          type: types.SideEditPropType.Boolean,
          show: (props: ScrollProjectCardProps) => props.hasVideo,
        },
        {
          name: 'videoWidth',
          label: 'Video Width',
          type: types.SideEditPropType.Number,
          rangeOptions: {
            min: 200,
            max: 1000,
            step: 10,
          },
          show: (props: ScrollProjectCardProps) => props.hasVideo,
        },
        {
          name: 'videoAspectRatio',
          label: 'Aspect Ratio',
          type: types.SideEditPropType.Select,
          show: (props: ScrollProjectCardProps) => props.hasVideo,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { label: 'Square', value: 1 },
              { label: '4:3', value: 1.33 },
              { label: '3:2', value: 1.5 },
              { label: '16:9', value: 1.78 },
            ],
          },
        },
        {
          name: 'videoRounded',
          label: 'Rounded Corners',
          type: types.SideEditPropType.Boolean,
          show: (props: ScrollProjectCardProps) => props.hasVideo,
        },
        {
          name: 'videoBottomSpace',
          label: 'Space Below Video',
          type: types.SideEditPropType.Number,
          rangeOptions: {
            min: 0,
            max: 80,
            step: 4,
          },
          show: (props: ScrollProjectCardProps) => props.hasVideo,
        },
        {
          name: 'autoPlay',
          label: 'Autoplay',
          type: types.SideEditPropType.Boolean,
          show: (props: ScrollProjectCardProps) => props.hasVideo,
        },
        {
          name: 'loop',
          label: 'Loop',
          type: types.SideEditPropType.Boolean,
          show: (props: ScrollProjectCardProps) => props.hasVideo,
        },
        {
          name: 'muted',
          label: 'Muted',
          type: types.SideEditPropType.Boolean,
          show: (props: ScrollProjectCardProps) => props.hasVideo,
        },
        {
          name: 'controls',
          label: 'Controls',
          type: types.SideEditPropType.Boolean,
          show: (props: ScrollProjectCardProps) => props.hasVideo,
        },
      ],
    },
    {
      groupName: 'Icon',
      props: [
        {
          name: 'hasIcon',
          label: 'Has Icon',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: types.SideEditPropType.Image,
          show: (props: ScrollProjectCardProps) => props.hasIcon,
        },
        {
          name: 'iconSize',
          label: 'Icon Size',
          type: types.SideEditPropType.Number,
          rangeOptions: {
            min: 12,
            max: 80,
            step: 2,
          },
          show: (props: ScrollProjectCardProps) => props.hasIcon,
        },
        {
          name: 'iconRounded',
          label: 'Rounded Icon',
          type: types.SideEditPropType.Boolean,
          show: (props: ScrollProjectCardProps) => props.hasIcon,
        },
      ],
    },
  ],
}

export default ScrollProjectCard