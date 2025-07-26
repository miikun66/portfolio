import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function Home() {
  const { currentLang } = useContext(LanguageContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{currentLang.home}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
        praesentium dignissimos odit eveniet perspiciatis a, vitae quam pariatur
        placeat, in quod repellendus et. Nihil non exercitationem expedita ab
        dignissimos quaerat, similique, et at placeat debitis laboriosam
        architecto numquam quisquam consectetur quidem vel. Iure earum unde
        ipsam tempora reprehenderit repudiandae neque illum sint itaque,
        nesciunt, nulla porro voluptatem labore doloribus obcaecati fugit
        doloremque quo impedit modi et! Cum suscipit praesentium, unde
        reprehenderit commodi explicabo voluptate quaerat molestias. Impedit
        similique, dicta omnis provident aliquid quia officiis eos amet unde,
        eligendi accusantium facilis? Itaque voluptatibus illum quisquam,
        officia ut culpa facere harum corporis. Aspernatur eaque cum non? Quo
        nam qui dolor, harum in ea reprehenderit reiciendis mollitia voluptates
        adipisci modi animi praesentium blanditiis doloremque. Velit magni
        mollitia quibusdam eligendi eius alias dicta aut ea quod, placeat sint
        vitae optio deserunt necessitatibus modi eveniet eaque nobis similique
        aperiam eos commodi, libero quisquam explicabo. Commodi facere maxime
        reiciendis. Eveniet culpa sunt doloribus magni. Quas nihil inventore
        aperiam quidem, commodi recusandae! Velit qui neque cupiditate eos
        maxime sunt eligendi laboriosam fugit, quidem quis animi. Fugit harum
        quos corporis tempore ipsam molestiae voluptate, delectus perspiciatis
        rem! Cum excepturi molestiae ea reiciendis sed est vel quis quibusdam
        ullam sunt et quod soluta ex reprehenderit dolores tenetur eum, quasi
        officiis dignissimos, dolor nobis, qui magnam assumenda non? Cumque
        aliquam vitae impedit, blanditiis suscipit harum adipisci voluptas amet
        delectus labore ipsa natus consequatur asperiores nobis voluptatum hic
        nisi. Similique officia eaque odit architecto, facilis, placeat ex quos
        nesciunt voluptas laboriosam at rerum ducimus iste quod molestias odio!
        Ipsum, quia quisquam laudantium quos asperiores quam labore sapiente
        natus similique distinctio reprehenderit nesciunt, pariatur placeat
        accusamus. Molestiae ratione voluptatibus aspernatur fugit corporis! Vel
        sint blanditiis facere non minus ut doloremque pariatur a. Debitis
        similique placeat assumenda vel iure cupiditate quaerat, itaque aliquid
        exercitationem quam qui natus ex, ea dolore possimus ab earum ipsum
        facilis corporis. Quam consectetur laborum repudiandae sed
        exercitationem eius reiciendis ipsum placeat dolorum soluta ducimus
        alias quibusdam quaerat et tempore officiis nesciunt perferendis in, ut,
        at consequuntur suscipit quidem modi mollitia. Id odit minus architecto?
        Sapiente eos ipsa voluptate sed sit omnis minus commodi atque in,
        incidunt dicta rerum pariatur debitis necessitatibus laudantium vel
        corrupti nam iure soluta similique fuga velit, iusto cum. Sed, cum
        quidem! Porro omnis at suscipit explicabo sit aperiam aliquam quasi eius
        laborum iste quia, vero totam optio similique praesentium, odio ad
        repellendus maxime distinctio nam ipsam! Eligendi aut vel non
        perspiciatis ullam quos aspernatur exercitationem ab molestiae
        consequuntur. Corporis ducimus quaerat eos. Labore placeat accusamus,
        eligendi suscipit libero dolor consequuntur, sunt tempore sit blanditiis
        explicabo aspernatur voluptatibus fugiat facilis illum id, obcaecati
        maxime reiciendis culpa ipsum? Atque eum quam vel assumenda libero
        dolores dolore aut nulla recusandae reiciendis, minima deserunt magnam
        nostrum autem maiores debitis enim, cupiditate, incidunt numquam porro
        doloremque expedita sed blanditiis! Animi commodi eius blanditiis
        eligendi expedita, a non modi repellendus totam? In minima odit
        perferendis, veritatis magni nulla aspernatur. Excepturi ducimus porro
        voluptatem. Similique ipsum porro eum neque, mollitia corporis.
      </p>
    </div>
  );
}

export default Home;
