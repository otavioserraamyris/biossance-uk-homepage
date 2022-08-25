import { Text } from '../Text/index.client'

import { IAssessibilityStatement } from './typingHelper';

import { styles } from './styles'

const AssesibilityStatement = ({ headline, paragraph }: IAssessibilityStatement
): JSX.Element => {

  const {
    container,
    containerHeadline,
    containerParagraph
  } = styles

  return (
    <div className={container}>
      <div className={containerHeadline}>
        <Text
          textType={'headline'}>
          {headline}
        </Text>
      </div>
      <div className={containerParagraph}>
        <Text
          textType={'paragraph'}>
          {paragraph}
        </Text>
      </div></div>

  );
};

export default AssesibilityStatement;
