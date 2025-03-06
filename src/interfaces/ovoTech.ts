export interface IDadosLote {
  linhagem: 'Embrapa 051' | 'Nova Gen';
  lote: string;
  questao?: string; // Question
  dados: ISemanaDados[];
}

export interface ISemanaDados {
  data: string; // Formato "YYYY-MM-DD"
  semana: number;
  producao: number; // Produção real de ovos (%)
  peso: number; // Peso médio das aves (kg)
}
