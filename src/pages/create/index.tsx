import React, { FC, useEffect, useState } from 'react'
import gfm from '@bytemd/plugin-gfm'
import breaks from '@bytemd/plugin-breaks'
import frontmatter from '@bytemd/plugin-frontmatter'
import { Editor, Viewer } from '@bytemd/react'
import zhHans from 'bytemd/locales/zh_Hans.json'
import 'bytemd/dist/index.min.css'
import highlight from '@bytemd/plugin-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import styles from './index.module.less'
import { Button, Input } from 'antd'
import { savePage } from '@/service/index'
const plugins = [
  gfm(),
  breaks(),
  frontmatter(),
  highlight()
  // Add more plugins here
]
interface IProps {
  readOnly: boolean
}
const CreatePage = (props: IProps) => {
  const [value, setValue] = useState('')
  const { readOnly } = props

  const onValueChange = (e: string) => {
    setValue(e)
  }
  const handleSave = () => {
    if (value) {
      savePage(value)
    }
    console.log(value)
  }

  return (
    <div className='h-full bg-white p-3'>
      <div className='react-quill-wrap'>
        <div className='flex justify-between'>
          <Input
            type='text'
            className='title-input'
            placeholder='请输入标题'
            variant='borderless'
          />
          <div>
            <Button
              type='primary'
              className='save-btn'
              onClick={handleSave}
            >
              保存
            </Button>
          </div>
        </div>
        <h2 className='title'>富文本编辑器</h2>
        <div className={`quill-editor-wraph ${styles.editor}`}>
          {readOnly ? (
            <Viewer
              plugins={plugins}
              value={value}
            />
          ) : (
            <Editor
              locale={zhHans}
              plugins={plugins}
              value={value}
              onChange={onValueChange}
            />
          )}
        </div>
      </div>
    </div>
  )
}

CreatePage.displayName = 'CreatePage'
export default CreatePage

