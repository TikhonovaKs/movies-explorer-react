import './BlockTitle.css';

function BlockTitle(props) {
  const { title } = props;
  if (title === 'About me') {
    return <h2 class="block-title block-title-white">{title}</h2>;
  } else {
    return <h2 class="block-title">{title}</h2>;
  }
}

export default BlockTitle;
