/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JenkinsService } from './jenkins.service';

describe('JenkinsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JenkinsService]
    });
  });

  it('should ...', inject([JenkinsService], (service: JenkinsService) => {
    expect(service).toBeTruthy();
  }));
});
