import React, { Fragment, useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { StepLabel, Typography, Step, Stepper } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formulario.length - 1) {
      aoEnviar(dadosColetados);
    }
  });
  const formulario = [
    <DadosUsuarios aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
    <Typography variant="h5">Obrigado pelo Cadastro</Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  // Switch substituido por um array
  // function formularioAtual(etapa) {
  //   switch (etapa) {
  //     case 0:
  //       return <DadosUsuarios aoEnviar={proximo}/>;
  //     case 1:
  //       return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
  //     case 2:
  //       return <DadosEntrega aoEnviar={aoEnviar}/>;
  //     default:
  //       return <Typography>Erro ao selecionar formulário</Typography>;
  //   }
  // }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      <Fragment>{formulario[etapaAtual]}</Fragment>
    </>
  );
}

export default FormularioCadastro;
