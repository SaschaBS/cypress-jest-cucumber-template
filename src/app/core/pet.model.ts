export type PetType = 'cat' | 'dog'

export interface Pet {
  id?: string | undefined;
  name: string;
  type: PetType;
}
