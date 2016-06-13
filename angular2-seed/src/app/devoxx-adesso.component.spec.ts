import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DevoxxAdessoAppComponent } from '../app/devoxx-adesso.component';

beforeEachProviders(() => [DevoxxAdessoAppComponent]);

describe('App: DevoxxAdesso', () => {
  it('should create the app',
      inject([DevoxxAdessoAppComponent], (app: DevoxxAdessoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'devoxx-adesso works!\'',
      inject([DevoxxAdessoAppComponent], (app: DevoxxAdessoAppComponent) => {
    expect(app.title).toEqual('devoxx-adesso works!');
  }));
});
