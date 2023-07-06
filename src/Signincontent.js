import { Link } from "react-router-dom";

const Signincontent =() =>
{
    return(
        <>
       <div>
  <h5 className="mt-4 ms-3" style={{color: '#E36156'}}>NEED AN ACCOUNT?</h5>
  <p className="my-3 ms-3" style={{color: '#162547', fontWeight: 400, fontSize: '17px', lineHeight: '1.4em', letterSpacing: '1px'}}>
    Create an account to start managing<br />
    your company. Click the "Create New Account"<br />
    button below to get started
  </p>
  <Link to ="/" className="btn text-white ms-3" style={{backgroundColor: '#162547', fontSize: '14px', padding: '10px 5px'}}>Create New Account</Link>
</div>


        </>
    )
}

export default Signincontent;