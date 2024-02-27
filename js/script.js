gsap.utils.toArray(".gsap-line").forEach((target) => {
  gsap.from(target, {
    width: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "bottom 0%",
      toggleActions: "play reverse play reverse",
    },
  });
});
gsap.utils.toArray(".gsap-left").forEach((target) => {
  gsap.from(target, {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "bottom 0%",
    },
  });
});
gsap.utils.toArray(".gsap-right").forEach((target) => {
  gsap.from(target, {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "bottom 0%",
    },
  });
});

gsap.utils.toArray(".gsap-bottom").forEach((target) => {
  gsap.from(target, {
    y: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "bottom 0%",
    },
  });
});

("use strict"); /* 厳格にエラーをチェック */

{
  /* ローカルスコープ */

  // DOM取得
  const tabMenus = document.querySelectorAll(".tab__menu-item");
  console.log(tabMenus);

  // イベント付加
  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener("click", tabSwitch);
  });

  // イベントの処理
  function tabSwitch(e) {
    // クリックされた要素のデータ属性を取得
    const tabTargetData = e.currentTarget.dataset.tab;
    // クリックされた要素の親要素と、その子要素を取得
    const tabList = e.currentTarget.closest(".tab__menu");
    console.log(tabList);
    const tabItems = tabList.querySelectorAll(".tab__menu-item");
    console.log(tabItems);
    // クリックされた要素の親要素の兄弟要素の子要素を取得
    const tabPanelItems =
      tabList.nextElementSibling.querySelectorAll(".tab__panel-box");
    console.log(tabPanelItems);

    // クリックされたtabの同階層のmenuとpanelのクラスを削除
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove("is-active");
    });
    tabPanelItems.forEach((tabPanelItem) => {
      tabPanelItem.classList.remove("is-show");
    });

    // クリックされたmenu要素にis-activeクラスを付加
    e.currentTarget.classList.add("is-active");
    // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
    tabPanelItems.forEach((tabPanelItem) => {
      if (tabPanelItem.dataset.panel === tabTargetData) {
        tabPanelItem.classList.add("is-show");
      }
    });
  }
}
