import * as Yup from "yup"; 

const registerValidation = Yup.object().shape ({
    pseudo : Yup.string()
        .required("Vous devez renseigner un pseudo")
        .min(3, "Votre pseudo doit comporter au moins 3 caractères" )
        .max(30, "Votre pseudo ne doit pas excéder 30 caractères"), 
    email: Yup.string()
        .email("Vous devez renseigner un email valide")
        .required("Vous devez renseigner un email"),
    password: Yup.string()
        .required("Vous devez renseigner un mot de passe")
        .min(8, "Votre mot de passe doit comporter au moins 8 caractères")
        .matches(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/, 
        "Vous devez renseigner au moins 8 caractères, 1 majsucule, 1 minuscule, 1 chiffre et 1 caractère spécial"),
    confirmPassword: Yup.string()
        .required("Vous devez confirmer votre mot de passe")
        .oneOf([Yup.ref("password")], "Votre mot de passe doit correspondre au précédent"), 
}); 

export default registerValidation; 

