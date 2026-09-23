export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <h2>A small studio that talks like your smartest friend.</h2>
            <div className="about-copy">
              <p>
                As Mama Said is a creative studio working out of Cairo and Dubai. We
                build brand identity, content, film, and paid media for businesses that
                would rather be understood than shouted about.
              </p>
              <p>
                Our approach starts with a plain question: what does this business
                actually need people to believe? Everything after that — the script, the
                shot list, the media plan — answers it.
              </p>
              <p>
                We keep teams small on purpose. Fewer handoffs, faster decisions, and a
                founder in every review.
              </p>
            </div>
          </div>
          <div className="team">
            <div className="team-card">
              <div className="role">Creative direction</div>
              <div className="name">Cairo studio</div>
            </div>
            <div className="team-card">
              <div className="role">Production &amp; media</div>
              <div className="name">Dubai studio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
