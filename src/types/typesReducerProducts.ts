// Generated by https://quicktype.io

export interface ProductsModel {
  id: number;
  nombre: string;
  tipo_servicio: TipoServicio;
  precio: number;
  calificacion: number;
  banner: string;
  quantity?: number;
}

export enum TipoServicio {
  BienestarYSalud = "Bienestar y salud",
  Empty = "",
  Entretención = "Entretención",
  EstéticaCorporal = "Estética corporal",
  Gastronomía = "Gastronomía",
  OtrosServicios = "Otros servicios",
  ProductosConRetiroEnMiTiendaYODespach = "Productos con retiro en mi tienda y/o despach",
  SalónDeBelleza = "Salón de belleza",
  ViajesYTurismo = "Viajes y turismo",
}
export interface InitialStateProducts {
  lista_productos: ProductsModel[] | [];
}
