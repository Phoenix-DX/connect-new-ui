/** Route inputs of UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel (SupperMeeting_Carousel.mvc.js model
    VariablesRecord and setInputs, query string). */
export interface SupperMeetingCarouselInputs {
  /** In_StartingSupperMeetingId (Long Integer, kept as a string): the supper meeting whose slide is active first. */
  In_StartingSupperMeetingId: string;
}

/** PreloadedSupperMeetings (UBTConnect.model.js:21984-22005): the preload object the previous screen sets. */
export interface PreloadedSupperMeetings {
  /** SupperMeetingIds (Long Integer list, kept as strings). */
  SupperMeetingIds: readonly string[];
}
