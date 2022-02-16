import { TestBed } from '@angular/core/testing';

import { BuscaEnderecoService } from './busca-endereco.service';

describe('BuscaEnderecoService', () => {
  let service: BuscaEnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaEnderecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
