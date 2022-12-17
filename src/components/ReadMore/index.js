import {useState} from 'react'
import {Container, Head, Text, Img, Button} from './styledComponents'

const ReadMore = props => {
  const [text, setText] = useState(false)
  const {reactHooksDescription} = props

  const onClickReadMore = () => {
    setText(prevState => !prevState)
  }

  return (
    <Container>
      <Head>React Hooks</Head>
      <Text>Hooks are a new addition to React</Text>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Text>
        {text ? reactHooksDescription : reactHooksDescription.slice(0, 170)}
      </Text>
      <Button onClick={onClickReadMore}>
        {text ? 'Read Less' : 'Read More'}
      </Button>
    </Container>
  )
}

export default ReadMore
