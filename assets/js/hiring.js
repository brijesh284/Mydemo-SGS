window.onload = () => {
    document.querySelector(".preloader").style.display = "none";

    let job = window.jobSearching;
    let jobOffset = job.clientHeight + job.clientHeight / 2 + job.offsetTop;

    let resume = window.yourResume;
    let resumeOffset = resume.clientHeight + resume.clientHeight / 2 + resume.offsetTop;

    let apply = window.applyNow;
    let applyOffset = apply.clientHeight + apply.clientHeight / 2 + apply.offsetTop;

    let interviews = window.interviews;
    let interviewsOffset =
        interviews.clientHeight + interviews.clientHeight / 2 + interviews.offsetTop;

    let decision = window.decision;
    let decisionOffset = decision.clientHeight * 2.3 + decision.offsetTop;

    if (window.innerWidth > 1000) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > jobOffset) {
                job.querySelector(".job-img").style.transform = "translateX(-55%) scale(1.5)";
                job.querySelector(".job-text").style.transform = "translate(60%,-160%)";
                job.querySelector("ul").classList.remove("hidden");

                job.querySelectorAll("li")[0].classList.remove("opacity-0");
                setTimeout(() => job.querySelectorAll("li")[1].classList.remove("opacity-0"), 1000);
                setTimeout(() => job.querySelectorAll("li")[2].classList.remove("opacity-0"), 2000);
                setTimeout(() => job.querySelectorAll("li")[3].classList.remove("opacity-0"), 3000);
            }
            if (window.scrollY > resumeOffset) {
                resume.querySelector(".resume-img").style.transform =
                    "translate(-80% , 10%) scale(1.5)";
                resume.querySelector(".resume-text").style.transform = "translate(60%,-100%)";
                resume.querySelector("ul").classList.remove("hidden");

                setTimeout(
                    () => resume.querySelectorAll("li")[0].classList.remove("opacity-0"),
                    1000
                );
                setTimeout(
                    () => resume.querySelectorAll("li")[1].classList.remove("opacity-0"),
                    2000
                );
            }

            if (window.scrollY > applyOffset) {
                apply.querySelector(".apply-img").style.transform =
                    "translate(-80% , -20%) scale(1.5) rotate(100deg)";
                apply.querySelector(".apply-text").style.transform = "translate(60%,50%)";
                apply.querySelector("ul").classList.remove("hidden");

                setTimeout(
                    () => apply.querySelectorAll("li")[0].classList.remove("opacity-0"),
                    1000
                );
                setTimeout(
                    () => apply.querySelectorAll("li")[1].classList.remove("opacity-0"),
                    2000
                );
                setTimeout(
                    () => apply.querySelectorAll("li")[2].classList.remove("opacity-0"),
                    3000
                );
                setTimeout(
                    () => apply.querySelectorAll("li")[3].classList.remove("opacity-0"),
                    4000
                );
            }

            if (window.scrollY > interviewsOffset) {
                interviews.querySelector(".interviews-img").style.transform =
                    "translateX(-55%) scale(1.3)";
                interviews.querySelector(".interviews-text").style.transform =
                    "translate(60%,-140%)";
                interviews.querySelector("ul").classList.remove("hidden");

                interviews.querySelectorAll("li")[0].classList.remove("opacity-0");
                setTimeout(
                    () => interviews.querySelectorAll("li")[1].classList.remove("opacity-0"),
                    1000
                );
                setTimeout(
                    () => interviews.querySelectorAll("li")[2].classList.remove("opacity-0"),
                    2000
                );
                setTimeout(
                    () => interviews.querySelectorAll("li")[3].classList.remove("opacity-0"),
                    3000
                );
            }
            if (window.scrollY > decisionOffset) {
                decision.querySelector(".decision-img").style.transform =
                    "translate(-85% ,25%) scale(1.3) rotateY(-360deg)";
                decision.querySelector(".decision-text").style.transform = "translate(60%,-75%)";
                decision.querySelector("ul").classList.remove("hidden");

                setTimeout(
                    () => decision.querySelectorAll("li")[0].classList.remove("opacity-0"),
                    1000
                );
                setTimeout(
                    () => decision.querySelectorAll("li")[1].classList.remove("opacity-0"),
                    2000
                );
                setTimeout(
                    () => decision.querySelectorAll("li")[2].classList.remove("opacity-0"),
                    3000
                );
            }
        });
    } else {
        jobOffset = job.clientHeight / 3 + job.offsetTop;
        resumeOffset = resume.clientHeight + resume.offsetTop;
        applyOffset = apply.clientHeight + apply.offsetTop;
        decisionOffset = decision.clientHeight*1.5 + decision.offsetTop;

        window.addEventListener("scroll", () => {
            if (window.scrollY > jobOffset) {
                job.querySelector(".job-img").style.transform = " scale(1.3)";
                job.querySelector(".job-text img").style.margin = "30px auto";

                job.querySelector("ul").style.textAlign = "center";
                job.querySelector("ul").style.listStyle = "none";
                job.querySelector("ul").classList.remove("hidden");

                job.querySelectorAll("li")[0].classList.remove("opacity-0");
                setTimeout(() => job.querySelectorAll("li")[1].classList.remove("opacity-0"), 1000);
                setTimeout(() => job.querySelectorAll("li")[2].classList.remove("opacity-0"), 2000);
                setTimeout(() => job.querySelectorAll("li")[3].classList.remove("opacity-0"), 3000);
            }
            if (window.scrollY > resumeOffset) {
                resume.querySelector(".resume-img").style.transform = " scale(1.2)";
                resume.querySelector(".resume-text img").style.margin = "40px auto";
                resume.querySelector(".resume-text").style.maxWidth = "95vw";

                resume.querySelector("ul").style.textAlign = "center";
                resume.querySelector("ul").style.listStyle = "none";
                resume.querySelector("ul").classList.remove("hidden");

                setTimeout(
                    () => resume.querySelectorAll("li")[0].classList.remove("opacity-0"),
                    1000
                );
                setTimeout(
                    () => resume.querySelectorAll("li")[1].classList.remove("opacity-0"),
                    2000
                );
            }
            if (window.scrollY > applyOffset) {
                apply.querySelector(".apply-img").style.transform =
                    "rotate(35deg) translateY(12%) scale(1.2)";
                apply.querySelector(".apply-text img").style.margin = "20px auto";

                apply.querySelector("ul").style.textAlign = "center";
                apply.querySelector("ul").style.listStyle = "none";
                apply.querySelector("ul").classList.remove("hidden");

                setTimeout(
                    () => apply.querySelectorAll("li")[0].classList.remove("opacity-0"),
                    1000
                );
                setTimeout(
                    () => apply.querySelectorAll("li")[1].classList.remove("opacity-0"),
                    2000
                );
                setTimeout(
                    () => apply.querySelectorAll("li")[2].classList.remove("opacity-0"),
                    3000
                );
                setTimeout(
                    () => apply.querySelectorAll("li")[3].classList.remove("opacity-0"),
                    4000
                );
            }
            if (window.scrollY > interviewsOffset) {
                interviews.querySelector(".interviews-img").style.transform = " scale(1.2)";
                interviews.querySelector(".interviews-text img").style.margin = "20px auto";

                interviews.querySelector("ul").style.textAlign = "center";
                interviews.querySelector("ul").style.listStyle = "none";
                interviews.querySelector("ul").style.marginBottom = "30px";
                interviews.querySelector("ul").classList.remove("hidden");

                setTimeout(
                    () => interviews.querySelectorAll("li")[0].classList.remove("opacity-0"),
                    1000
                );
                setTimeout(
                    () => interviews.querySelectorAll("li")[1].classList.remove("opacity-0"),
                    2000
                );
                setTimeout(
                    () => interviews.querySelectorAll("li")[2].classList.remove("opacity-0"),
                    3000
                );
                setTimeout(
                    () => interviews.querySelectorAll("li")[3].classList.remove("opacity-0"),
                    4000
                );
            }
            if (window.scrollY > decisionOffset) {
                decision.querySelector(".decision-img").style.transform = " scale(1.2)";
                decision.querySelector(".decision-text img").style.margin = "20px auto";
                decision.querySelector(".decision-text").style.maxWidth = "95vw";

                decision.querySelector("ul").style.textAlign = "center";
                decision.querySelector("ul").style.listStyle = "none";
                decision.querySelector("ul").style.marginBottom = "30px";
                decision.querySelector("ul").classList.remove("hidden");

                setTimeout(
                    () => decision.querySelectorAll("li")[0].classList.remove("opacity-0"),
                    1000
                );
                setTimeout(
                    () => decision.querySelectorAll("li")[1].classList.remove("opacity-0"),
                    2000
                );
                setTimeout(
                    () => decision.querySelectorAll("li")[2].classList.remove("opacity-0"),
                    3000
                );
            }
        });
    }
};
