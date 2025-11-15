export default function skillLogo(props) {
  return (
    <div id='skill-logo' className='container flex justify-center'>
        <img src={props.logo} height={150} width={150} alt="" />
    </div>
  )
}
