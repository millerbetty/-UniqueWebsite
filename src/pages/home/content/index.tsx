import FirstContent from './FirstContent'
import SecondContent from './SecondContent'
import styles from './index.module.less'
import 'react-quill/dist/quill.snow.css'

const Content = () => {
  return (
    <div className={`${styles.contentBg} h-screen`}>
      <FirstContent />
      <SecondContent readOnly={false} />
    </div>
  )
}

Content.displayName = 'Content'
export default Content

