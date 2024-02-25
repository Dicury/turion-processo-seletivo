import "./Form.css";
import { useForm } from "react-hook-form";

function Form() {
  // importação das funções do react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // Envio de data ao clicar em cadastrar
  const onSubmit = (data) => {
    console.log(data);
    isSubmitSuccessful ? alert("Cadastro efetuado") : "";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <p>Insira seus dados para efetuar o cadastro.</p>

      <input
        // Validação dos campos do formulário
        {...register("nome", {
          required: "Nome precisa ser preenchido.",
        })}
        className="form-control"
        type="text"
        placeholder="Nome"
      />
      {/* Padrão de mensagem de erros */}
      {errors.nome && <div className="form-error">{errors.nome.message}</div>}

      <input
        {...register("telefone", {
          required: "Telefone precisa ser preenchido.",
          minLength: {
            value: 9,
            message: "O telefone precisar ter no mínimo 9 caracteres.",
          },
          maxLength: {
            value: 14,
            message: "O telefone precisar ter no máximo 14 caracteres.",
          },
          pattern: {
            value: /^(\d{2})\D*(\d{5}|\d{4})\D*(\d{4})$/,
            message: "Telefone inválido.",
          },
        })}
        className="form-control"
        type="tel"
        placeholder="Celular (xx) (xxxxxxxxx)"
      />
      {errors.telefone && (
        <div className="form-error">{errors.telefone.message}</div>
      )}

      <select
        {...register("departamento", {
          required: "Departamento precisa ser selecionado.",
        })}
        className="form-select"
        defaultValue={""}
      >
        <option className="form-option" value="" disabled hidden>
          Selecione seu departamento
        </option>
        <option className="form-option" value="Administrativo">
          Administrativo
        </option>
        <option className="form-option" value="Financeiro">
          Financeiro
        </option>
        <option className="form-option" value="Compras">
          Compras
        </option>
        <option className="form-option" value="Faturamento">
          Faturamento
        </option>
      </select>
      {errors.departamento && (
        <div className="form-error">{errors.departamento.message}</div>
      )}

      <input
        {...register("email", {
          required: "E-mail precisa ser preenchido.",
        })}
        className="form-control"
        type="email"
        placeholder="E-mail"
      />
      {errors.email && <div className="form-error">{errors.email.message}</div>}

      <input
        {...register("password", {
          required: "Senha precisa ser preenchida.",
          minLength: {
            value: 8,
            message: "A senha precisar ter no mínimo 8 caracteres.",
          },
        })}
        className="form-control"
        type="password"
        placeholder="Senha"
      />
      {errors.password && (
        <div className="form-error">{errors.password.message}</div>
      )}

      <button className="form-control" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

export default Form;
