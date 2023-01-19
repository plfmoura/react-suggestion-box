import React from 'react'
import { useState } from 'react'
import './form.css'

export default function Form() {

    const [ name, setName ] = useState('') 
    const [ email, setEmail ] = useState('') 
    const [ msg, setMsg ] = useState('') 

    const [ resultado, setResultado ] = useState({
        name: '', 
        email: '', 
        msg: ''
    })

    const result = []

    const getValues = () => {
        result.push({name: name, email: email, text: msg})
        const verificaValores = () => {
            if(!result[0]){
                console.log('false')
            } else {
                setResultado({ ...resultado, name: name, email: email, msg: msg })
            }
        }
        verificaValores()

        const dataResults = document.querySelector('.resultado')

        const mostraMensagens = () => {
            result.map(( item ) => {
                let newElement = document.createElement('div')
                newElement.classList.add('user-msg-container')
                newElement.innerHTML = `
                    <div className="user-msg-container">
                        <div className="msg-content">
                            <p style="font-weight:700">Usuário: ${ item.name }</p>
                            <p>Email: ${ item.email }</p>
                            <p style="color:red">Mensagem: ${ item.text }</p>
                        </div>
                    </div>
                    `
                dataResults.appendChild(newElement)
            })
        }

        if(result[0].name == ''){
            alert('Digite seu nome de usuário.')
        } else if(result[0].email == '') {
            alert('Digite seu email de cadastro.')

        } else if(result[0].text == '') {
            alert('Digite sua mensagem.')
        } else {
            mostraMensagens()
        }

        return result
    }

  return (
    <div className='container'>
        <form action="" className='form-container'>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" className="name" maxLength={20} onChange={ event => setName(event.target.value) }/>
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="email" className="email" onChange={ event => setEmail(event.target.value) }/>
            </div>
            <textarea name="texto" cols="30" rows="10" maxLength={340} className='area-texto' 
                onChange={ event => setMsg(event.target.value) }
            />
            <input type="button" value="Enviar" className='enviar' onClick={ getValues }/>
        </form>
        <div className="resultado"></div>
    </div>
  )
}