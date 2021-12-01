-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Nov-2021 às 16:11
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projeto_05`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `alunos`
--

CREATE TABLE `alunos` (
  `nome_alu` varchar(255) NOT NULL,
  `id_alu` int(11) NOT NULL,
  `id_professor` int(11) NOT NULL,
  `numero_alu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `alunos`
--

INSERT INTO `alunos` (`nome_alu`, `id_alu`, `id_professor`, `numero_alu`) VALUES
('Marcelo Pinheiro', 19, 6, 9),
('Antonio Sala', 25, 6, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao`
--

CREATE TABLE `avaliacao` (
  `nome` varchar(255) NOT NULL,
  `data` date NOT NULL,
  `hora` time NOT NULL,
  `codigo_ava` int(11) NOT NULL,
  `id_professor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `conter`
--

CREATE TABLE `conter` (
  `codigo_tur` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `id_professor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `conter`
--

INSERT INTO `conter` (`codigo_tur`, `id_aluno`, `id_professor`) VALUES
(9, 25, 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplinas`
--

CREATE TABLE `disciplinas` (
  `nome_dis` varchar(255) NOT NULL,
  `codigo_dis` int(11) NOT NULL,
  `codigo_ava` int(11) NOT NULL,
  `id_professor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `instituicao`
--

CREATE TABLE `instituicao` (
  `nome_ins` varchar(255) NOT NULL,
  `codigo_ins` int(11) NOT NULL,
  `id_professor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `instituicao`
--

INSERT INTO `instituicao` (`nome_ins`, `codigo_ins`, `id_professor`) VALUES
('Faetec', 7, 6),
('IFRJ', 8, 6),
('ETPC', 10, 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `lecionar`
--

CREATE TABLE `lecionar` (
  `id_usu` int(11) NOT NULL,
  `codigo_dis` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `nota`
--

CREATE TABLE `nota` (
  `id_nota` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `id_avaliacao` int(11) NOT NULL,
  `disciplina` int(11) NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `possuir`
--

CREATE TABLE `possuir` (
  `id_usu` int(11) NOT NULL,
  `codigo_dis` int(11) NOT NULL,
  `codigo_tur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `realizar`
--

CREATE TABLE `realizar` (
  `codigo_ava` int(11) NOT NULL,
  `id_alu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `turmas`
--

CREATE TABLE `turmas` (
  `nome_tur` varchar(255) NOT NULL,
  `codigo_tur` int(11) NOT NULL,
  `cod_instituicao` int(11) NOT NULL,
  `id_professor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `turmas`
--

INSERT INTO `turmas` (`nome_tur`, `codigo_tur`, `cod_instituicao`, `id_professor`) VALUES
('3101 - Info', 9, 7, 6),
('3101 - Log', 10, 8, 6),
('3101 - Mec', 11, 7, 6),
('2101 - Etr', 12, 10, 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `nome_usu` varchar(255) NOT NULL,
  `id_usu` int(11) NOT NULL,
  `email_usu` varchar(255) NOT NULL,
  `senha_usu` varchar(255) NOT NULL,
  `user_usu` varchar(255) NOT NULL,
  `img_usu` varchar(255) NOT NULL,
  `tipo_usuario` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`nome_usu`, `id_usu`, `email_usu`, `senha_usu`, `user_usu`, `img_usu`, `tipo_usuario`) VALUES
('Danilo', 6, 'danilodocoliveira@gmail.com', 'Danilodan01*', 'Danilo', '619c0037ebc0b.jpg', 1),
('Tonin', 9, 'tonin@gmail.com', 'Tonin123#', 'Antonio', '', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`id_alu`),
  ADD KEY `id_professor` (`id_professor`);

--
-- Índices para tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD PRIMARY KEY (`codigo_ava`),
  ADD KEY `id_professor` (`id_professor`);

--
-- Índices para tabela `conter`
--
ALTER TABLE `conter`
  ADD KEY `codigo_tur` (`codigo_tur`),
  ADD KEY `id_aluno` (`id_aluno`),
  ADD KEY `id_professor` (`id_professor`);

--
-- Índices para tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  ADD PRIMARY KEY (`codigo_dis`);

--
-- Índices para tabela `instituicao`
--
ALTER TABLE `instituicao`
  ADD PRIMARY KEY (`codigo_ins`),
  ADD KEY `id_professor` (`id_professor`);

--
-- Índices para tabela `lecionar`
--
ALTER TABLE `lecionar`
  ADD KEY `id_usu` (`id_usu`),
  ADD KEY `codigo_dis` (`codigo_dis`);

--
-- Índices para tabela `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`id_nota`),
  ADD KEY `id_aluno` (`id_aluno`),
  ADD KEY `id_avaliacao` (`id_avaliacao`),
  ADD KEY `disciplina` (`disciplina`),
  ADD KEY `valor` (`valor`);

--
-- Índices para tabela `possuir`
--
ALTER TABLE `possuir`
  ADD KEY `codigo_dis` (`codigo_dis`),
  ADD KEY `codigo_tur` (`codigo_tur`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Índices para tabela `realizar`
--
ALTER TABLE `realizar`
  ADD KEY `id_alu` (`id_alu`),
  ADD KEY `codigo_ava` (`codigo_ava`);

--
-- Índices para tabela `turmas`
--
ALTER TABLE `turmas`
  ADD PRIMARY KEY (`codigo_tur`),
  ADD KEY `cod_instituicao` (`cod_instituicao`),
  ADD KEY `id_professor` (`id_professor`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usu`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `alunos`
--
ALTER TABLE `alunos`
  MODIFY `id_alu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  MODIFY `codigo_ava` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `disciplinas`
--
ALTER TABLE `disciplinas`
  MODIFY `codigo_dis` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `instituicao`
--
ALTER TABLE `instituicao`
  MODIFY `codigo_ins` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `nota`
--
ALTER TABLE `nota`
  MODIFY `id_nota` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `turmas`
--
ALTER TABLE `turmas`
  MODIFY `codigo_tur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `alunos`
--
ALTER TABLE `alunos`
  ADD CONSTRAINT `alunos_ibfk_1` FOREIGN KEY (`id_professor`) REFERENCES `usuario` (`id_usu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`id_professor`) REFERENCES `usuario` (`id_usu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `conter`
--
ALTER TABLE `conter`
  ADD CONSTRAINT `conter_ibfk_1` FOREIGN KEY (`codigo_tur`) REFERENCES `turmas` (`codigo_tur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `conter_ibfk_2` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id_alu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `conter_ibfk_3` FOREIGN KEY (`id_professor`) REFERENCES `usuario` (`id_usu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `instituicao`
--
ALTER TABLE `instituicao`
  ADD CONSTRAINT `instituicao_ibfk_1` FOREIGN KEY (`id_professor`) REFERENCES `usuario` (`id_usu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `lecionar`
--
ALTER TABLE `lecionar`
  ADD CONSTRAINT `lecionar_ibfk_1` FOREIGN KEY (`id_usu`) REFERENCES `usuario` (`id_usu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lecionar_ibfk_2` FOREIGN KEY (`codigo_dis`) REFERENCES `disciplinas` (`codigo_dis`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `nota`
--
ALTER TABLE `nota`
  ADD CONSTRAINT `nota_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `alunos` (`id_alu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nota_ibfk_2` FOREIGN KEY (`id_avaliacao`) REFERENCES `avaliacao` (`codigo_ava`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nota_ibfk_3` FOREIGN KEY (`disciplina`) REFERENCES `disciplinas` (`codigo_dis`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `possuir`
--
ALTER TABLE `possuir`
  ADD CONSTRAINT `possuir_ibfk_1` FOREIGN KEY (`codigo_dis`) REFERENCES `disciplinas` (`codigo_dis`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `possuir_ibfk_2` FOREIGN KEY (`codigo_tur`) REFERENCES `turmas` (`codigo_tur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `possuir_ibfk_3` FOREIGN KEY (`id_usu`) REFERENCES `usuario` (`id_usu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `realizar`
--
ALTER TABLE `realizar`
  ADD CONSTRAINT `realizar_ibfk_1` FOREIGN KEY (`id_alu`) REFERENCES `alunos` (`id_alu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `realizar_ibfk_2` FOREIGN KEY (`codigo_ava`) REFERENCES `avaliacao` (`codigo_ava`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `turmas`
--
ALTER TABLE `turmas`
  ADD CONSTRAINT `turmas_ibfk_1` FOREIGN KEY (`cod_instituicao`) REFERENCES `instituicao` (`codigo_ins`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `turmas_ibfk_2` FOREIGN KEY (`id_professor`) REFERENCES `usuario` (`id_usu`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
