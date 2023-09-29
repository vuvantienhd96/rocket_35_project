import { useState } from "react"

export const FormInput = () => {
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [err, setError] = useState('');
    const getNameinfo = () => {
        // user nhập last name và first name là rỗng thì hiển thị lỗi yêu cầu bắt nhập còn lại k hiển thị lỗi
        if(fname.trim() === '' || lname.trim() === ''){
            setError('error');
            return;
        }
        setError('');
        console.log('=====', fname + '  ' + lname);
    }
    return (
        <div>
            <h2>HTML Forms</h2>
            <form action="/action_page.php">
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname"onChange={(e) => {
                    console.log('e', e);
                    setfName(e.target.value);
                }} name="fname" defaultValue={fname} />
                <br></br>
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" onChange={(e) => setlName(e.target.value)} defaultValue={lname} />
                <br></br>
                {
                    err.length > 0 ? <span className='title'>Vui lòng nhập các trường</span> : ''
                }
                
                <input type="button" value="Submit" onClick={getNameinfo}/>
            </form>
        </div>
    )

}