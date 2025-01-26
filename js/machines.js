const images3 = [    
    "assets/images/machines/p (1).jpeg",
    "assets/images/machines/p (2).jpeg",
    "assets/images/machines/p (3).jpeg",
    "assets/images/machines/p (4).jpeg",
    "assets/images/machines/p (5).jpeg",
    "assets/images/machines/p (6).jpeg",
    "assets/images/machines/p (7).jpeg",
    "assets/images/machines/p (8).jpeg",
    "assets/images/machines/p (9).jpeg",
    "assets/images/machines/p (10).jpeg",
    "assets/images/machines/p (11).jpeg",
    "assets/images/machines/p (12).jpeg",
    "assets/images/machines/p (13).jpeg",
    "assets/images/machines/p (14).jpeg",
    "assets/images/machines/p (15).jpeg",
    "assets/images/machines/p (16).jpeg",
    "assets/images/machines/p (17).jpeg",
    "assets/images/machines/p (18).jpeg",
    "assets/images/machines/p (19).jpeg",
    "assets/images/machines/p (20).jpeg",
    "assets/images/machines/p (21).jpeg",
    "assets/images/machines/p (22).jpeg",
    "assets/images/machines/p (23).jpeg",
    "assets/images/machines/p (24).jpeg",
    "assets/images/machines/p (25).jpeg",
    "assets/images/machines/p (26).jpeg",
    "assets/images/machines/p (27).jpeg",
    "assets/images/machines/p (28).jpeg",
    "assets/images/machines/p (29).jpeg",
    "assets/images/machines/p (30).jpeg",
    "assets/images/machines/p (31).jpeg",
    "assets/images/machines/p (32).jpeg",
    "assets/images/machines/p (33).jpeg",
    "assets/images/machines/p (34).jpeg",
    "assets/images/machines/p (35).jpeg",
    "assets/images/machines/p (36).jpeg",
    "assets/images/machines/p (37).jpeg",
    "assets/images/machines/p (38).jpeg",
    "assets/images/machines/p (39).jpeg",
    "assets/images/machines/p (40).jpeg",
    "assets/images/machines/p (41).jpeg",

];
images3.forEach((src) => {
    document.write(`
        <div class="col-md-4 col-sm-6">
            <div class="single-explore-item">
                <div class="single-explore-img">
                    <img style="object-fit: cover;" src="${src}" alt="explore image">
                </div>
            </div>
        </div>
    `);
});