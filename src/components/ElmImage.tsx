import React from 'react'

interface ElmImageProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

export default function ElmImage(props: ElmImageProps) {
  const width = props.width || 240
  const height = props.height || 240
  const supportSuffixes = ['jpeg', 'JPEG', 'png', 'PNG']

  let suffix = ''
  for (const s of supportSuffixes) {
    if (props.src.endsWith(s)) {
      suffix = s
    }
  }
  // todo: 判断设备是否支持 webp 格式，优先启用
  const supportWebp = false

  let src = 'https://cube.elemecdn.com/'
  src += `${props.src[0]}/${props.src.slice(1, 3)}/${props.src.slice(3)}.${suffix}`
  src += `?x-oss-process=image/resize,m_lfit,w_${width},h_${height}`
  if (supportWebp) {
    src += '/format,webp'
  }

  return (
    <img src={src} alt={props.alt} />
  )
}
