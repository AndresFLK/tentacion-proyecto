

export default function InfoSpace({title, text, img}){
    return(
        <section class="py-5 bg-light" id="scroll-target">
          <div class="container px-5 my-5">
            <div class="row gx-5 align-items-center">
              <div class="col-lg-6">
                <img
                  class="img-fluid rounded mb-5 mb-lg-0"
                  src={img}
                  alt="..."
                />
              </div>
              <div class="col-lg-6">
              <h2 class="fw-bolder">{title}</h2>
              <p class="lead fw-normal text-muted mb-0">
                {text}
              </p>
              </div>
            </div>
          </div>
        </section>
    )
}