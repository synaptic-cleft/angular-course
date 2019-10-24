// todo: fix!!
// import {TestBed} from "@angular/core/testing";
// import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
// import { PeopleService } from './people.service';

// describe('The people service', () => {
//     let injector: TestBed;
//     let service: PeopleService;
//     let httpMock: HttpTestingController;
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpClientTestingModule],
//             providers: [PeopleService]
//         })
//         injector.get(PeopleService);
//         injector.get(HttpTestingController);
//     })
//     it('should have a list of people', () => {
//         expect(httpMock.verify).toBe(true)
//         const req = httpMock.expectOne("http://localhost:3000/people");
//     expect(req.request.method).toBe("GET");
//     }
//     )
// })