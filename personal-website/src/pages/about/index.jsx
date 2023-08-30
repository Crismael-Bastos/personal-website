import React from 'react'
import './index.css'
import Avatar from '../../components/avatar'

export const About = () => {
  return (
    <div className='about-container flex center column gap-1-5'>
      <h2 >Sobre mim</h2>
      <Avatar/>
      <div className="about-text-container">
        <p className='text'>Olá! Me chamo <span className='bold'>Crismael</span>, desenvolvedor web com um pouco mais de 1 ano de experiência no mercado. Já trabalhei com linguagens como Python, JavaScript e SQL, criando diversos tipos de sistemas.</p>
        <p>Atualmente estou estudando Django, React e AWS e nas horas vagas assistindo series.</p>
        <h2 className='flex center'>Formação</h2>
        <p><span className='bold'>Estácio</span>: Análise em Desenvolvimento de Sistemas (cursando)</p>
      </div>
    </div>
  )
}
