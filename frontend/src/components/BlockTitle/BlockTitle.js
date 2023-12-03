import './BlockTitle.css';

function BlockTitle(props) {
  const { title } = props;

  return (
    <h2 class="block-title">{title}</h2>
  )
}

export default BlockTitle;
