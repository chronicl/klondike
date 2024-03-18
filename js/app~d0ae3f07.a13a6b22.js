(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app~d0ae3f07"],
  {
    0: function(t, e, a) {
      t.exports = a("56d7");
    },
    "001f": function(t, e, a) {},
    "0124": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-row",
            { staticClass: "no-spacing" },
            [
              a(
                "v-col",
                { staticClass: "no-spacing" },
                [
                  a("Button", {
                    attrs: { label: "actions.reset" },
                    on: { click: t.reset }
                  }),
                  a("Button", {
                    attrs: { label: "actions.save" },
                    on: { click: t.update }
                  })
                ],
                1
              )
            ],
            1
          );
        },
        s = [],
        r = a("4b1b"),
        i = {
          name: "SettingButtons",
          components: { Button: r["a"] },
          methods: {
            reset: function() {
              this.$emit("reset");
            },
            update: function() {
              this.$emit("update");
            }
          }
        },
        o = i,
        c = a("2877"),
        l = a("6544"),
        u = a.n(l),
        d = a("62ad"),
        h = a("0fd9"),
        m = Object(c["a"])(o, n, s, !1, null, null, null);
      e["a"] = m.exports;
      u()(m, { VCol: d["a"], VRow: h["a"] });
    },
    "0423": function(t) {
      t.exports = JSON.parse(
        '{"header":{"title":"klondike"},"default":{"waiting":"出会いを待っています..","questions":"質問/アイデア？","github":"githubページを見てください"},"encounter":{"duration":"期間：","dps":"合計：","encounter":"出会い","damage":"損傷","deaths":"死"},"combatant":{"dmg-pct":"DMG%","ch-pct":"CH%","dh-pct":"DH%","cdh-pct":"CDH%","heal-pct":"Heal%","over-heal-pct":"OvHeal%","hps":"HPS","max-hit":"MaxHit","deaths":"死"},"actions":{"view-encounter":"ビューの遭遇","reset-encounter":"リセット遭遇","load-sample-data":"サンプルデータの読み込み","reset-all":"すべてリセット","reset":"リセット","save":"保存"},"views":{"general-style":"一般的なスタイル","names":"名前のスタイル","numbers":"数値形式","player-details":"プレイヤー詳細","job-icons":"ジョブアイコン","percent-bar":"パーセントバー","percent-bar-you":"パーセントバー（YOU）","percent-bar-role":"パーセントバー（ロール）","advanced":"高度"},"settings":{"language":"言語","limit-break":"限界ブレークを含める","background-color":"背景色","font-color":"フォント色","name-style":"名前スタイル","style-limit-break":"スタイルLB","blur-names":"ぼかし名","abbreviate-numbers":"数字を省略","precision":"精度","job-icons":"ジョブアイコン","job-icon-size":"アイコンサイズ","job-icon-color":"アイコンカラー","blur-job-icons":"ぼかしアイコン","percent-bar":"パーセントバー","percent-bar-mode":"パーセントバーモード","percent-bar-color":"パーセントバーカラー","opacity":"不透明度","logging":"ロギングを有効にします","digit-sep":"桁区切り","decimal-sep":"小数点区切り","include-pets":"ペットを含む","include-jobless":"失業を含む","always-show-splash":"常にウェルカムを表示","show-github":"GITHUB情報を表示","percent-bar-you":"バーの色を有効にする","percent-bar-color-you":"あなたのバーの色","percent-bar-role":"役割ごとにバーの色を有効にする","percent-bar-color-tank":"TANKバーの色","percent-bar-color-heal":"HEALERバーの色","percent-bar-color-dps":"DPSバーの色","secondary-stat":"二次統計"}}'
      );
    },
    "05dc": function(t, e, a) {
      "use strict";
      var n = a("917a"),
        s = a.n(n);
      s.a;
    },
    "086d": function(t, e, a) {},
    "0c8d": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            [
              a("Select", {
                attrs: {
                  label: "settings.name-style",
                  "current-item-id": t.settings.nameStyleId,
                  items: t.validValues.nameStyles
                },
                on: {
                  change: function(e) {
                    t.settings.nameStyleId = e;
                  }
                }
              }),
              a("Checkbox", {
                attrs: {
                  label: "settings.style-limit-break",
                  initialCheckboxValue: t.settings.styleLimitBreak
                },
                on: {
                  change: function(e) {
                    t.settings.styleLimitBreak = e;
                  }
                }
              }),
              a("Checkbox", {
                attrs: {
                  label: "settings.blur-names",
                  initialCheckboxValue: t.settings.blurNames
                },
                on: {
                  change: function(e) {
                    t.settings.blurNames = e;
                  }
                }
              }),
              a("SettingButtons", { on: { reset: t.reset, update: t.update } })
            ],
            1
          );
        },
        s = [],
        r = a("0124"),
        i = a("263e"),
        o = a("282a"),
        c = {
          name: "Names",
          components: {
            Checkbox: i["a"],
            Select: o["a"],
            SettingButtons: r["a"]
          },
          data: function() {
            return {
              settings: {
                nameStyleId: this.$store.state.settings.nameStyleId,
                styleLimitBreak: this.$store.state.settings.styleLimitBreak,
                blurNames: this.$store.state.settings.blurNames
              },
              validValues: {
                nameStyles: this.$store.state.validValues.nameStyles
              }
            };
          },
          methods: {
            reset: function() {
              this.$emit("reset", this.settings);
            },
            update: function() {
              this.$emit("update", this.settings);
            }
          }
        },
        l = c,
        u = a("2877"),
        d = a("6544"),
        h = a.n(d),
        m = a("a75b"),
        p = Object(u["a"])(l, n, s, !1, null, null, null);
      e["a"] = p.exports;
      h()(p, { VContent: m["a"] });
    },
    1368: function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a(
                "v-row",
                { staticClass: "row" },
                [
                  a(
                    "v-col",
                    { staticClass: "column" },
                    [a("Label", { attrs: { label: t.label } })],
                    1
                  )
                ],
                1
              ),
              a(
                "v-row",
                { staticClass: "row" },
                [
                  a(
                    "v-col",
                    { staticClass: "column" },
                    [
                      a("v-color-picker", {
                        staticClass: "color-picker",
                        style: t.colorPickerStyle,
                        attrs: {
                          value: "colors.background",
                          "hide-inputs": "",
                          "canvas-height": "15",
                          width: "160",
                          mode: "hexa"
                        },
                        on: { input: t.updateColor },
                        model: {
                          value: t.color,
                          callback: function(e) {
                            t.color = e;
                          },
                          expression: "color"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          );
        },
        s = [],
        r = a("4e13"),
        i = {
          name: "ColorPicker",
          components: { Label: r["a"] },
          props: { label: String, initialColor: String },
          data: function() {
            return { color: {} };
          },
          computed: {
            colorPickerStyle: function() {
              return {
                color: this.$store.state.settings.fontColor,
                backgroundColor: this.$store.state.settings._foregroundColor
              };
            }
          },
          methods: {
            updateColor: function() {
              this.$emit("change", this.color);
            }
          },
          beforeMount: function() {
            this.color = this.initialColor;
          }
        },
        o = i,
        c = (a("05dc"), a("bccd"), a("2877")),
        l = a("6544"),
        u = a.n(l),
        d = a("62ad"),
        h = a("03a4"),
        m = a("0fd9"),
        p = Object(c["a"])(o, n, s, !1, null, "79f391df", null);
      e["a"] = p.exports;
      u()(p, { VCol: d["a"], VColorPicker: h["a"], VRow: m["a"] });
    },
    1696: function(t, e, a) {
      "use strict";
      var n = a("77e6"),
        s = a.n(n);
      s.a;
    },
    1728: function(t, e, a) {},
    "17eb": function(t, e, a) {
      "use strict";
      var n = a("3299"),
        s = a.n(n);
      s.a;
    },
    "1b38": function(t, e, a) {
      "use strict";
      var n = a("001f"),
        s = a.n(n);
      s.a;
    },
    "213f": function(t, e, a) {
      "use strict";
      a.d(e, "a", function() {
        return D;
      }),
        a.d(e, "b", function() {
          return k;
        }),
        a.d(e, "c", function() {
          return P;
        });
      a("b0c0"), a("07ac");
      var n = {
          type: "CombatData",
          Encounter: {
            n: "\n",
            t: "\t",
            title: "Encounter",
            duration: "06:42",
            DURATION: "402",
            damage: "41444887",
            "damage-m": "41.44",
            "damage-*": "41.44M",
            "DAMAGE-k": "41445",
            "DAMAGE-m": "41",
            "DAMAGE-b": "0",
            "DAMAGE-*": "41M",
            dps: "103096.73",
            "dps-*": "dps-*",
            DPS: "103097",
            "DPS-k": "103",
            "DPS-m": "DPS-m",
            "DPS-*": "103K",
            encdps: "103096.73",
            "encdps-*": "103.10K",
            ENCDPS: "103097",
            "ENCDPS-k": "103",
            "ENCDPS-m": "0",
            "ENCDPS-*": "103K",
            hits: "3089",
            crithits: "946",
            "crithit%": "0%",
            misses: "0",
            hitfailed: "4",
            swings: "3093",
            tohit: "99.80",
            TOHIT: "100",
            maxhit: "Limit Break-Chimatsuri-676054",
            MAXHIT: "Limit Break-676054",
            "maxhit-*": "Limit Break-Chimatsuri-676.05K",
            "MAXHIT-*": "Limit Break-676K",
            healed: "13660836",
            enchps: "33982.18",
            "enchps-*": "33.98K",
            ENCHPS: "33982",
            "ENCHPS-k": "34",
            "ENCHPS-m": "0",
            "ENCHPS-*": "33K",
            heals: "1439",
            critheals: "946",
            "critheal%": "0%",
            cures: "0",
            maxheal: "Terry Nazon-Essential Dignity-67782",
            MAXHEAL: "Terry Nazon-67782",
            maxhealward: "Terry Nazon-Essential Dignity-67782",
            MAXHEALWARD: "Terry Nazon-67782",
            "maxheal-*": "Terry Nazon-Essential Dignity-67.78K",
            "MAXHEAL-*": "Terry Nazon-67K",
            "maxhealward-*": "Terry Nazon-Essential Dignity-67.78K",
            "MAXHEALWARD-*": "Terry Nazon-67K",
            damagetaken: "10537009",
            "damagetaken-*": "10.54M",
            healstaken: "14157648",
            "healstaken-*": "14.16M",
            powerdrain: "0",
            "powerdrain-*": "0",
            powerheal: "104000",
            "powerheal-*": "104.00K",
            kills: "0",
            deaths: "3",
            CurrentZoneName: "Eden's Verse: Refulgence (Savage)",
            Last10DPS: "77318",
            Last30DPS: "89801",
            Last60DPS: "95323"
          },
          Combatant: {
            MissingNumber: {
              n: "\n",
              t: "\t",
              name: "MissingNumber",
              duration: "00:42",
              DURATION: "42",
              damage: "1551811",
              "damage-m": "1.55",
              "damage-b": "0.00",
              "damage-*": "1.55M",
              "DAMAGE-k": "1552",
              "DAMAGE-m": "2",
              "DAMAGE-b": "0",
              "DAMAGE-*": "1551K",
              "damage%": "38%",
              dps: "36947.88",
              "dps-*": "36.95K",
              DPS: "36948",
              "DPS-k": "37",
              "DPS-m": "0",
              "DPS-*": "36K",
              encdps: "29842.52",
              "encdps-*": "29.84K",
              ENCDPS: "29843",
              "ENCDPS-k": "30",
              "ENCDPS-m": "0",
              "ENCDPS-*": "29K",
              hits: "32",
              crithits: "0",
              "crithit%": "0%",
              crittypes: "-",
              misses: "0",
              hitfailed: "0",
              swings: "32",
              tohit: "100.00",
              TOHIT: "100",
              maxhit: "Heart Asunder-87973",
              MAXHIT: "87973",
              "maxhit-*": "Heart Asunder-87.97K",
              "MAXHIT-*": "87K",
              healed: "0",
              "healed%": "0%",
              enchps: "0.00",
              "enchps-*": "0",
              ENCHPS: "0",
              "ENCHPS-k": "0",
              "ENCHPS-m": "0",
              "ENCHPS-*": "0",
              critheals: "0",
              "critheal%": "0%",
              heals: "0",
              cures: "0",
              maxheal: "",
              MAXHEAL: "",
              maxhealward: "",
              MAXHEALWARD: "",
              "maxheal-*": "",
              "MAXHEAL-*": "",
              "maxhealward-*": "",
              "MAXHEALWARD-*": "",
              damagetaken: "0",
              "damagetaken-*": "0",
              healstaken: "0",
              "healstaken-*": "0",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "0",
              "powerheal-*": "0",
              kills: "0",
              deaths: "0",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "0",
              Last30DPS: "26561",
              Last60DPS: "36948",
              Job: "",
              ParryPct: "0%",
              BlockPct: "0%",
              IncToHit: "---",
              OverHealPct: "0%",
              DirectHitPct: "0%",
              DirectHitCount: "0",
              CritDirectHitCount: "0",
              CritDirectHitPct: "0%",
              overHeal: "0",
              damageShield: "0",
              absorbHeal: "0"
            },
            "Wyatt Earp": {
              n: "\n",
              t: "\t",
              name: "Wyatt Earp",
              duration: "06:42",
              DURATION: "402",
              damage: "8482600",
              "damage-m": "8.48",
              "damage-b": "0.01",
              "damage-*": "8.48M",
              "DAMAGE-k": "8483",
              "DAMAGE-m": "8",
              "DAMAGE-b": "0",
              "DAMAGE-*": "8482K",
              "damage%": "20%",
              dps: "21101.00",
              "dps-*": "21.10K",
              DPS: "21101",
              "DPS-k": "21",
              "DPS-m": "0",
              "DPS-*": "21K",
              encdps: "21101.00",
              "encdps-*": "21.10K",
              ENCDPS: "21101",
              "ENCDPS-k": "21",
              "ENCDPS-m": "0",
              "ENCDPS-*": "21K",
              hits: "495",
              crithits: "202",
              "crithit%": "41%",
              crittypes: "0.0%L - 0.0%F - 0.0%M",
              misses: "0",
              hitfailed: "0",
              swings: "495",
              tohit: "100.00",
              TOHIT: "100",
              maxhit: "Drill-86524",
              MAXHIT: "86524",
              "maxhit-*": "Drill-86.52K",
              "MAXHIT-*": "86K",
              healed: "24278",
              "healed%": "0%",
              enchps: "60.39",
              "enchps-*": "60",
              ENCHPS: "60",
              "ENCHPS-k": "0",
              "ENCHPS-m": "0",
              "ENCHPS-*": "60",
              critheals: "1",
              "critheal%": "100%",
              heals: "1",
              cures: "0",
              maxheal: "Second Wind-24278",
              MAXHEAL: "24278",
              maxhealward: "Second Wind-24278",
              MAXHEALWARD: "24278",
              "maxheal-*": "Second Wind-24.28K",
              "MAXHEAL-*": "24.28K",
              "maxhealward-*": "Second Wind-24.28K",
              "MAXHEALWARD-*": "24.28K",
              damagetaken: "793961",
              "damagetaken-*": "793.96K",
              healstaken: "1552367",
              "healstaken-*": "1.55M",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "0",
              "powerheal-*": "0",
              kills: "0",
              deaths: "0",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "14552",
              Last30DPS: "24999",
              Last60DPS: "19507",
              Job: "Mch",
              ParryPct: "0%",
              BlockPct: "0%",
              IncToHit: "72.73",
              OverHealPct: "0%",
              DirectHitPct: "37%",
              DirectHitCount: "183",
              CritDirectHitCount: "71",
              CritDirectHitPct: "14%",
              overHeal: "0",
              damageShield: "0",
              absorbHeal: "0"
            },
            "April O'Neil": {
              n: "\n",
              t: "\t",
              name: "April O'Neil",
              duration: "06:42",
              DURATION: "402",
              damage: "6959960",
              "damage-m": "6.96",
              "damage-b": "0.01",
              "damage-*": "6.96M",
              "DAMAGE-k": "6960",
              "DAMAGE-m": "7",
              "DAMAGE-b": "0",
              "DAMAGE-*": "6959K",
              "damage%": "16%",
              dps: "17313.33",
              "dps-*": "17.31K",
              DPS: "17313",
              "DPS-k": "17",
              "DPS-m": "0",
              "DPS-*": "17K",
              encdps: "17313.33",
              "encdps-*": "17.31K",
              ENCDPS: "17313",
              "ENCDPS-k": "17",
              "ENCDPS-m": "0",
              "ENCDPS-*": "17K",
              hits: "488",
              crithits: "141",
              "crithit%": "29%",
              crittypes: "0.0%L - 0.0%F - 0.0%M",
              misses: "0",
              hitfailed: "0",
              swings: "489",
              tohit: "100.00",
              TOHIT: "100",
              maxhit: "Hyosho Ranryu-113141",
              MAXHIT: "113141",
              "maxhit-*": "Hyosho Ranryu-113.14K",
              "MAXHIT-*": "113K",
              healed: "21277",
              "healed%": "0%",
              enchps: "52.80",
              "enchps-*": "52",
              ENCHPS: "53",
              "ENCHPS-k": "0",
              "ENCHPS-m": "0",
              "ENCHPS-*": "52",
              critheals: "0",
              "critheal%": "0%",
              heals: "12",
              cures: "0",
              maxheal: "Bloodbath-5599",
              MAXHEAL: "5599",
              maxhealward: "Bloodbath-5599",
              MAXHEALWARD: "5599",
              "maxheal-*": "Bloodbath-5.60K",
              "MAXHEAL-*": "5.60K",
              "maxhealward-*": "Bloodbath-5.60K",
              "MAXHEALWARD-*": "5.60K",
              damagetaken: "793236",
              "damagetaken-*": "793.24K",
              healstaken: "1598035",
              "healstaken-*": "1.60M",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "0",
              "powerheal-*": "0",
              kills: "0",
              deaths: "0",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "19324",
              Last30DPS: "22927",
              Last60DPS: "17804",
              Job: "Nin",
              ParryPct: "0%",
              BlockPct: "0%",
              IncToHit: "71.88",
              OverHealPct: "0%",
              DirectHitPct: "44%",
              DirectHitCount: "218",
              CritDirectHitCount: "61",
              CritDirectHitPct: "12%",
              overHeal: "0",
              damageShield: "0",
              absorbHeal: "21277"
            },
            "Praetor Fenix": {
              n: "\n",
              t: "\t",
              name: "Praetor Fenix",
              duration: "06:41",
              DURATION: "401",
              damage: "6142748",
              "damage-m": "6.14",
              "damage-b": "0.01",
              "damage-*": "6.14M",
              "DAMAGE-k": "6143",
              "DAMAGE-m": "6",
              "DAMAGE-b": "0",
              "DAMAGE-*": "6142K",
              "damage%": "14%",
              dps: "15318.57",
              "dps-*": "15.32K",
              DPS: "15319",
              "DPS-k": "15",
              "DPS-m": "0",
              "DPS-*": "15K",
              encdps: "15280.47",
              "encdps-*": "15.28K",
              ENCDPS: "15280",
              "ENCDPS-k": "15",
              "ENCDPS-m": "0",
              "ENCDPS-*": "15K",
              hits: "448",
              crithits: "137",
              "crithit%": "31%",
              crittypes: "0.0%L - 0.0%F - 0.0%M",
              misses: "0",
              hitfailed: "0",
              swings: "448",
              tohit: "100.00",
              TOHIT: "100",
              maxhit: "Full Thrust-83589",
              MAXHIT: "83589",
              "maxhit-*": "Full Thrust-83.59K",
              "MAXHIT-*": "83K",
              healed: "57117",
              "healed%": "0%",
              enchps: "142.08",
              "enchps-*": "142",
              ENCHPS: "142",
              "ENCHPS-k": "0",
              "ENCHPS-m": "0",
              "ENCHPS-*": "142",
              critheals: "0",
              "critheal%": "0%",
              heals: "7",
              cures: "0",
              maxheal: "Life Surge-14164",
              MAXHEAL: "14164",
              maxhealward: "Life Surge-14164",
              MAXHEALWARD: "14164",
              "maxheal-*": "Life Surge-14.16K",
              "MAXHEAL-*": "14.16K",
              "maxhealward-*": "Life Surge-14.16K",
              "MAXHEALWARD-*": "14.16K",
              damagetaken: "2064602",
              "damagetaken-*": "2.06M",
              healstaken: "1855847",
              "healstaken-*": "1.86M",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "0",
              "powerheal-*": "0",
              kills: "0",
              deaths: "1",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "31110",
              Last30DPS: "21680",
              Last60DPS: "19212",
              Job: "Drg",
              ParryPct: "0%",
              BlockPct: "0%",
              IncToHit: "77.14",
              OverHealPct: "0%",
              DirectHitPct: "45%",
              DirectHitCount: "203",
              CritDirectHitCount: "65",
              CritDirectHitPct: "15%",
              overHeal: "0",
              damageShield: "0",
              absorbHeal: "57117"
            },
            "George Lass": {
              n: "\n",
              t: "\t",
              name: "George Lass",
              duration: "06:42",
              DURATION: "402",
              damage: "5352119",
              "damage-m": "5.35",
              "damage-b": "0.01",
              "damage-*": "5.35M",
              "DAMAGE-k": "5352",
              "DAMAGE-m": "5",
              "DAMAGE-b": "0",
              "DAMAGE-*": "5352K",
              "damage%": "12%",
              dps: "13313.73",
              "dps-*": "13.31K",
              DPS: "13314",
              "DPS-k": "13",
              "DPS-m": "0",
              "DPS-*": "13K",
              encdps: "13313.73",
              "encdps-*": "13.31K",
              ENCDPS: "13314",
              "ENCDPS-k": "13",
              "ENCDPS-m": "0",
              "ENCDPS-*": "13K",
              hits: "286",
              crithits: "85",
              "crithit%": "30%",
              crittypes: "0.0%L - 0.0%F - 0.0%M",
              misses: "0",
              hitfailed: "0",
              swings: "286",
              tohit: "100.00",
              TOHIT: "100",
              maxhit: "Quadruple Technical Finish-176880",
              MAXHIT: "176880",
              "maxhit-*": "Quadruple Technical Finish-176.88K",
              "MAXHIT-*": "176K",
              healed: "0",
              "healed%": "0%",
              enchps: "0.00",
              "enchps-*": "0",
              ENCHPS: "0",
              "ENCHPS-k": "0",
              "ENCHPS-m": "0",
              "ENCHPS-*": "0",
              critheals: "0",
              "critheal%": "0%",
              heals: "0",
              cures: "0",
              maxheal: "",
              MAXHEAL: "",
              maxhealward: "",
              MAXHEALWARD: "",
              "maxheal-*": "",
              "MAXHEAL-*": "",
              "maxhealward-*": "",
              "MAXHEALWARD-*": "",
              damagetaken: "841510",
              "damagetaken-*": "841.51K",
              healstaken: "1421758",
              "healstaken-*": "1.42M",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "0",
              "powerheal-*": "0",
              kills: "0",
              deaths: "1",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "6008",
              Last30DPS: "11035",
              Last60DPS: "9846",
              Job: "Rpr",
              ParryPct: "0%",
              BlockPct: "0%",
              IncToHit: "71.88",
              OverHealPct: "0%",
              DirectHitPct: "40%",
              DirectHitCount: "115",
              CritDirectHitCount: "37",
              CritDirectHitPct: "13%",
              overHeal: "0",
              damageShield: "0",
              absorbHeal: "0"
            },
            "Christopher Nolan": {
              n: "\n",
              t: "\t",
              name: "Christopher Nolan",
              duration: "06:42",
              DURATION: "402",
              damage: "4190368",
              "damage-m": "4.19",
              "damage-b": "0.00",
              "damage-*": "4.19M",
              "DAMAGE-k": "4190",
              "DAMAGE-m": "4",
              "DAMAGE-b": "0",
              "DAMAGE-*": "4190K",
              "damage%": "10%",
              dps: "10423.80",
              "dps-*": "10.42K",
              DPS: "10424",
              "DPS-k": "10",
              "DPS-m": "0",
              "DPS-*": "10K",
              encdps: "10423.80",
              "encdps-*": "10.42K",
              ENCDPS: "10424",
              "ENCDPS-k": "10",
              "ENCDPS-m": "0",
              "ENCDPS-*": "10K",
              hits: "393",
              crithits: "110",
              "crithit%": "28%",
              crittypes: "0.0%L - 0.0%F - 0.0%M",
              misses: "0",
              hitfailed: "0",
              swings: "393",
              tohit: "100.00",
              TOHIT: "100",
              maxhit: "Bloodspiller-39521",
              MAXHIT: "39521",
              "maxhit-*": "Bloodspiller-39.52K",
              "MAXHIT-*": "39K",
              healed: "538905",
              "healed%": "3%",
              enchps: "1340.56",
              "enchps-*": "1.34K",
              ENCHPS: "1341",
              "ENCHPS-k": "1",
              "ENCHPS-m": "0",
              "ENCHPS-*": "1340",
              critheals: "13",
              "critheal%": "28%",
              heals: "47",
              cures: "0",
              maxheal: "Blackest Night-43333",
              MAXHEAL: "43333",
              maxhealward: "Blackest Night-43333",
              MAXHEALWARD: "43333",
              "maxheal-*": "Blackest Night-43.33K",
              "MAXHEAL-*": "43.33K",
              "maxhealward-*": "Blackest Night-43.33K",
              "MAXHEALWARD-*": "43.33K",
              damagetaken: "1788069",
              "damagetaken-*": "1.79M",
              healstaken: "2364215",
              "healstaken-*": "2.36M",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "48800",
              "powerheal-*": "48.80K",
              kills: "0",
              deaths: "0",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "9456",
              Last30DPS: "13653",
              Last60DPS: "11304",
              Job: "Drk",
              ParryPct: "8%",
              BlockPct: "0%",
              IncToHit: "88.00",
              OverHealPct: "0%",
              DirectHitPct: "18%",
              DirectHitCount: "71",
              CritDirectHitCount: "18",
              CritDirectHitPct: "5%",
              overHeal: "0",
              damageShield: "129999",
              absorbHeal: "0"
            },
            "Ghost Crawler": {
              n: "\n",
              t: "\t",
              name: "Ghost Crawler",
              duration: "06:38",
              DURATION: "398",
              damage: "4038368",
              "damage-m": "4.04",
              "damage-b": "0.00",
              "damage-*": "4.04M",
              "DAMAGE-k": "4038",
              "DAMAGE-m": "4",
              "DAMAGE-b": "0",
              "DAMAGE-*": "4038K",
              "damage%": "9%",
              dps: "10146.65",
              "dps-*": "10.15K",
              DPS: "10147",
              "DPS-k": "10",
              "DPS-m": "0",
              "DPS-*": "10K",
              encdps: "10045.69",
              "encdps-*": "10.05K",
              ENCDPS: "10046",
              "ENCDPS-k": "10",
              "ENCDPS-m": "0",
              "ENCDPS-*": "10K",
              hits: "532",
              crithits: "142",
              "crithit%": "27%",
              crittypes: "0.0%L - 0.0%F - 0.0%M",
              misses: "0",
              hitfailed: "0",
              swings: "532",
              tohit: "100.00",
              TOHIT: "100",
              maxhit: "Confiteor-43798",
              MAXHIT: "43798",
              "maxhit-*": "Confiteor-43.80K",
              "MAXHIT-*": "43K",
              healed: "302976",
              "healed%": "2%",
              enchps: "753.67",
              "enchps-*": "753",
              ENCHPS: "754",
              "ENCHPS-k": "1",
              "ENCHPS-m": "0",
              "ENCHPS-*": "753",
              critheals: "0",
              "critheal%": "0%",
              heals: "18",
              cures: "0",
              maxheal: "Divine Veil-17594",
              MAXHEAL: "17594",
              maxhealward: "Divine Veil-17594",
              MAXHEALWARD: "17594",
              "maxheal-*": "Divine Veil-17.59K",
              "MAXHEAL-*": "17.59K",
              "maxhealward-*": "Divine Veil-17.59K",
              "MAXHEALWARD-*": "17.59K",
              damagetaken: "1632712",
              "damagetaken-*": "1.63M",
              healstaken: "2075145",
              "healstaken-*": "2.08M",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "46700",
              "powerheal-*": "46.70K",
              kills: "0",
              deaths: "0",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "5141",
              Last30DPS: "9268",
              Last60DPS: "9872",
              Job: "Pld",
              ParryPct: "10%",
              BlockPct: "47%",
              IncToHit: "87.50",
              OverHealPct: "0%",
              DirectHitPct: "20%",
              DirectHitCount: "105",
              CritDirectHitCount: "28",
              CritDirectHitPct: "5%",
              overHeal: "0",
              damageShield: "302976",
              absorbHeal: "0"
            },
            "Terry Nazon": {
              n: "\n",
              t: "\t",
              name: "Terry Nazon",
              duration: "06:41",
              DURATION: "401",
              damage: "2980824",
              "damage-m": "2.98",
              "damage-b": "0.00",
              "damage-*": "2.98M",
              "DAMAGE-k": "2981",
              "DAMAGE-m": "3",
              "DAMAGE-b": "0",
              "DAMAGE-*": "2980K",
              "damage%": "7%",
              dps: "7433.48",
              "dps-*": "7.43K",
              DPS: "7433",
              "DPS-k": "7",
              "DPS-m": "0",
              "DPS-*": "7433",
              encdps: "7414.99",
              "encdps-*": "7.41K",
              ENCDPS: "7415",
              "ENCDPS-k": "7",
              "ENCDPS-m": "0",
              "ENCDPS-*": "7414",
              hits: "233",
              crithits: "71",
              "crithit%": "30%",
              crittypes: "0.0%L - 0.0%F - 0.0%M",
              misses: "0",
              hitfailed: "1",
              swings: "234",
              tohit: "99.57",
              TOHIT: "100",
              maxhit: "Malefic IV-35177",
              MAXHIT: "35177",
              "maxhit-*": "Malefic IV-35.18K",
              "MAXHIT-*": "35K",
              healed: "5817950",
              "healed%": "42%",
              enchps: "14500.45",
              "enchps-*": "14.50K",
              ENCHPS: "14500",
              "ENCHPS-k": "15",
              "ENCHPS-m": "0",
              "ENCHPS-*": "14K",
              critheals: "142",
              "critheal%": "28%",
              heals: "505",
              cures: "0",
              maxheal: "Essential Dignity-67782",
              MAXHEAL: "67782",
              maxhealward: "Essential Dignity-67782",
              MAXHEALWARD: "67782",
              "maxheal-*": "Essential Dignity-67.78K",
              "MAXHEAL-*": "67.78K",
              "maxhealward-*": "Essential Dignity-67.78K",
              "MAXHEALWARD-*": "67.78K",
              damagetaken: "1879898",
              "damagetaken-*": "1.88M",
              healstaken: "1618352",
              "healstaken-*": "1.62M",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "0",
              "powerheal-*": "0",
              kills: "0",
              deaths: "1",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "6401",
              Last30DPS: "6625",
              Last60DPS: "8395",
              Job: "Sge",
              ParryPct: "0%",
              BlockPct: "0%",
              IncToHit: "73.68",
              OverHealPct: "32%",
              DirectHitPct: "7%",
              DirectHitCount: "17",
              CritDirectHitCount: "4",
              CritDirectHitPct: "2%",
              overHeal: "1832294",
              damageShield: "266974",
              absorbHeal: "0"
            },
            "Friedrich Nietzsche": {
              n: "\n",
              t: "\t",
              name: "Friedrich Nietzsche",
              duration: "06:42",
              DURATION: "402",
              damage: "2621846",
              "damage-m": "2.62",
              "damage-b": "0.00",
              "damage-*": "2.62M",
              "DAMAGE-k": "2622",
              "DAMAGE-m": "3",
              "DAMAGE-b": "0",
              "DAMAGE-*": "2621K",
              "damage%": "6%",
              dps: "6522.00",
              "dps-*": "6.52K",
              DPS: "6522",
              "DPS-k": "7",
              "DPS-m": "0",
              "DPS-*": "6522",
              encdps: "6522.00",
              "encdps-*": "6.52K",
              ENCDPS: "6522",
              "ENCDPS-k": "7",
              "ENCDPS-m": "0",
              "ENCDPS-*": "6522",
              hits: "213",
              crithits: "58",
              "crithit%": "27%",
              crittypes: "0.0%L - 0.0%F - 0.0%M",
              misses: "0",
              hitfailed: "3",
              swings: "216",
              tohit: "98.61",
              TOHIT: "99",
              maxhit: "Broil III-39695",
              MAXHIT: "39695",
              "maxhit-*": "Broil III-39.70K",
              "MAXHIT-*": "39K",
              healed: "6887102",
              "healed%": "50%",
              enchps: "17132.09",
              "enchps-*": "17.13K",
              ENCHPS: "17132",
              "ENCHPS-k": "17",
              "ENCHPS-m": "0",
              "ENCHPS-*": "17K",
              critheals: "145",
              "critheal%": "17%",
              heals: "849",
              cures: "0",
              maxheal: "Excogitation-66455",
              MAXHEAL: "66455",
              maxhealward: "Excogitation-66455",
              MAXHEALWARD: "66455",
              "maxheal-*": "Excogitation-66.46K",
              "MAXHEAL-*": "66.46K",
              "maxhealward-*": "Excogitation-66.46K",
              "MAXHEALWARD-*": "66.46K",
              damagetaken: "743021",
              "damagetaken-*": "743.02K",
              healstaken: "1667147",
              "healstaken-*": "1.67M",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "8500",
              "powerheal-*": "8.50K",
              kills: "0",
              deaths: "0",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "8924",
              Last30DPS: "6128",
              Last60DPS: "6338",
              Job: "Sch",
              ParryPct: "0%",
              BlockPct: "0%",
              IncToHit: "66.67",
              OverHealPct: "21%",
              DirectHitPct: "6%",
              DirectHitCount: "13",
              CritDirectHitCount: "2",
              CritDirectHitPct: "1%",
              overHeal: "1154613",
              damageShield: "1596897",
              absorbHeal: "0"
            },
            "John Doe": {
              n: "\n",
              t: "\t",
              name: "John Doe",
              duration: "00:47",
              DURATION: "47",
              damage: "189424",
              "damage-m": "0.19",
              "damage-b": "0.00",
              "damage-*": "189.42K",
              "DAMAGE-k": "189",
              "DAMAGE-m": "0",
              "DAMAGE-b": "0",
              "DAMAGE-*": "189K",
              "damage%": "4%",
              dps: "4030.30",
              "dps-*": "4.03K",
              DPS: "4030",
              "DPS-k": "4",
              "DPS-m": "0",
              "DPS-*": "4030",
              encdps: "3642.77",
              "encdps-*": "3.64K",
              ENCDPS: "3643",
              "ENCDPS-k": "4",
              "ENCDPS-m": "0",
              "ENCDPS-*": "3642",
              hits: "30",
              crithits: "0",
              "crithit%": "0%",
              crittypes: "-",
              misses: "0",
              hitfailed: "0",
              swings: "30",
              tohit: "100.00",
              TOHIT: "100",
              maxhit: "Shock Spikes-11548",
              MAXHIT: "11548",
              "maxhit-*": "Shock Spikes-11.55K",
              "MAXHIT-*": "11K",
              healed: "0",
              "healed%": "0%",
              enchps: "0.00",
              "enchps-*": "0",
              ENCHPS: "0",
              "ENCHPS-k": "0",
              "ENCHPS-m": "0",
              "ENCHPS-*": "0",
              critheals: "0",
              "critheal%": "0%",
              heals: "0",
              cures: "0",
              maxheal: "",
              MAXHEAL: "",
              maxhealward: "",
              MAXHEALWARD: "",
              "maxheal-*": "",
              "MAXHEAL-*": "",
              "maxhealward-*": "",
              "MAXHEALWARD-*": "",
              damagetaken: "700815",
              "damagetaken-*": "700.82K",
              healstaken: "0",
              "healstaken-*": "0",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "0",
              "powerheal-*": "0",
              kills: "0",
              deaths: "6",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "4373",
              Last30DPS: "2568",
              Last60DPS: "4030",
              Job: "",
              ParryPct: "0%",
              BlockPct: "0%",
              IncToHit: "100.00",
              OverHealPct: "0%",
              DirectHitPct: "0%",
              DirectHitCount: "0",
              CritDirectHitCount: "0",
              CritDirectHitPct: "0%",
              overHeal: "0",
              damageShield: "0",
              absorbHeal: "0"
            },
            "Limit Break": {
              n: "\n",
              t: "\t",
              name: "Limit Break",
              duration: "00:00",
              DURATION: "0",
              damage: "676054",
              "damage-m": "0.68",
              "damage-b": "0.00",
              "damage-*": "676.05K",
              "DAMAGE-k": "676",
              "DAMAGE-m": "1",
              "DAMAGE-b": "0",
              "DAMAGE-*": "676K",
              "damage%": "1%",
              dps: "∞",
              "dps-*": "---",
              DPS: "∞",
              "DPS-k": "∞",
              "DPS-m": "∞",
              "DPS-*": "---",
              encdps: "1681.73",
              "encdps-*": "1.68K",
              ENCDPS: "1682",
              "ENCDPS-k": "2",
              "ENCDPS-m": "0",
              "ENCDPS-*": "1681",
              hits: "1",
              crithits: "0",
              "crithit%": "0%",
              crittypes: "-",
              misses: "0",
              hitfailed: "0",
              swings: "1",
              tohit: "100.00",
              TOHIT: "100",
              maxhit: "Chimatsuri-676054",
              MAXHIT: "676054",
              "maxhit-*": "Chimatsuri-676.05K",
              "MAXHIT-*": "676K",
              healed: "0",
              "healed%": "0%",
              enchps: "0.00",
              "enchps-*": "0",
              ENCHPS: "0",
              "ENCHPS-k": "0",
              "ENCHPS-m": "0",
              "ENCHPS-*": "0",
              critheals: "0",
              "critheal%": "0%",
              heals: "0",
              cures: "0",
              maxheal: "",
              MAXHEAL: "",
              maxhealward: "",
              MAXHEALWARD: "",
              "maxheal-*": "",
              "MAXHEAL-*": "",
              "maxhealward-*": "",
              "MAXHEALWARD-*": "",
              damagetaken: "0",
              "damagetaken-*": "0",
              healstaken: "0",
              "healstaken-*": "0",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "0",
              "powerheal-*": "0",
              kills: "0",
              deaths: "0",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "---",
              Last30DPS: "---",
              Last60DPS: "---",
              Job: "",
              ParryPct: "0%",
              BlockPct: "0%",
              IncToHit: "---",
              OverHealPct: "0%",
              DirectHitPct: "0%",
              DirectHitCount: "0",
              CritDirectHitCount: "0",
              CritDirectHitPct: "0%",
              overHeal: "0",
              damageShield: "0",
              absorbHeal: "0"
            },
            "Selene (Friedrich Nietzsche)": {
              n: "\n",
              t: "\t",
              name: "Selene (Friedrich Nietzsche)",
              duration: "00:10",
              DURATION: "10",
              damage: "0",
              "damage-m": "0.00",
              "damage-b": "0.00",
              "damage-*": "0",
              "DAMAGE-k": "0",
              "DAMAGE-m": "0",
              "DAMAGE-b": "0",
              "DAMAGE-*": "0",
              "damage%": "0%",
              dps: "0.00",
              "dps-*": "0",
              DPS: "0",
              "DPS-k": "0",
              "DPS-m": "0",
              "DPS-*": "0",
              encdps: "0.00",
              "encdps-*": "0",
              ENCDPS: "0",
              "ENCDPS-k": "0",
              "ENCDPS-m": "0",
              "ENCDPS-*": "0",
              hits: "0",
              crithits: "0",
              "crithit%": "0%",
              crittypes: "0.0%L - 0.0%F - 0.0%M",
              misses: "0",
              hitfailed: "0",
              swings: "0",
              tohit: "---",
              TOHIT: "---",
              maxhit: "",
              MAXHIT: "",
              "maxhit-*": "",
              "MAXHIT-*": "",
              healed: "1984",
              "healed%": "100%",
              enchps: "220.44",
              "enchps-*": "220",
              ENCHPS: "220",
              "ENCHPS-k": "0",
              "ENCHPS-m": "0",
              "ENCHPS-*": "220",
              critheals: "2",
              "critheal%": "67%",
              heals: "3",
              cures: "0",
              maxheal: "Whispering Dawn (*)-662",
              MAXHEAL: "662",
              maxhealward: "Whispering Dawn (*)-662",
              MAXHEALWARD: "662",
              "maxheal-*": "Whispering Dawn (*)-662",
              "MAXHEAL-*": "662",
              "maxhealward-*": "Whispering Dawn (*)-662",
              "MAXHEALWARD-*": "662",
              damagetaken: "0",
              "damagetaken-*": "0",
              healstaken: "0",
              "healstaken-*": "0",
              powerdrain: "0",
              "powerdrain-*": "0",
              powerheal: "0",
              "powerheal-*": "0",
              kills: "0",
              deaths: "0",
              threatstr: "+(0)0/-(0)0",
              threatdelta: "0",
              Last10DPS: "",
              Last30DPS: "",
              Last60DPS: "",
              Job: "",
              ParryPct: "0%",
              BlockPct: "0%",
              IncToHit: "---",
              OverHealPct: "100%",
              DirectHitPct: "0%",
              DirectHitCount: "0",
              CritDirectHitCount: "0",
              CritDirectHitPct: "0%",
              overHeal: "1984",
              damageShield: "0",
              absorbHeal: "0"
            }
          },
          isActive: "true"
        },
        s = n,
        r = a("4360");
      a("ac1f"), a("466d"), a("5319"), a("1276");
      function i(t) {
        var e = t.split(" ");
        if (2 !== e.length) return t;
        var a = r["a"].state.settings.nameStyleId;
        switch (a) {
          case 0:
            return t;
          case 1:
            return l(e[0]) + " " + e[1];
          case 2:
            return e[0] + " " + l(e[1]);
          case 3:
            return l(e[0]) + " " + l(e[1]);
          case 4:
            return e[0];
          case 5:
            return e[1];
        }
      }
      function o(t) {
        var e = t.match(/\((.*)\)/);
        if (e) return t;
      }
      function c(t) {
        var e = t.match(/\((.*)\)/);
        e = e.pop();
        var a = i(e);
        return t.replace(e, a);
      }
      function l(t) {
        return t.charAt(0).toUpperCase() + ".";
      }
      a("caad"), a("a15b"), a("b680"), a("d3b7"), a("25f0"), a("2532");
      function u(t) {
        if (t) {
          var e = {};
          return (
            (e.sanitized = parseFloat(t.replace(",", "."))),
            (e.formatted = h(e.sanitized, !0)),
            e
          );
        }
      }
      function d(t) {
        if (t) {
          var e = {};
          return (
            (e.sanitized = parseInt(t.replace(/[,.]/g, ""))),
            (e.formatted = h(e.sanitized, !1)),
            e
          );
        }
      }
      function h(t, e) {
        var a = r["a"].getters.digitSeps[r["a"].state.settings.digitSepId].sep,
          n =
            r["a"].getters.decimalSeps[r["a"].state.settings.decimalSepId].sep;
        if (!m(t)) return "---";
        if (p(t)) {
          var s = b(t);
          return (s = g(s, n)), s;
        }
        var i = t.toString();
        if ((e && (i = S(i)), i.includes("."))) {
          var o = i.split(".");
          (o[0] = f(o[0], a)), (i = o.join(n));
        } else i = f(i, a);
        return i;
      }
      function m(t) {
        return isFinite(t);
      }
      function p(t) {
        return r["a"].state.settings.abbreviateNumbers && t >= 1e3;
      }
      function b(t) {
        var e = r["a"].state.settings.precision;
        e = Math.pow(10, e);
        for (var a = ["k", "m", "b", "t"], n = a.length - 1; n >= 0; n--) {
          var s = Math.pow(10, 3 * (n + 1));
          if (s <= t) {
            (t = Math.round((t * e) / s) / e),
              (t = t.toFixed(r["a"].state.settings.precision)),
              (t += " " + a[n]);
            break;
          }
        }
        return t;
      }
      function g(t, e) {
        return t.replace(".", e);
      }
      function f(t, e) {
        var a = t.toString();
        return 0 === r["a"].state.settings.digitSepId || a.length < 4
          ? a
          : a.replace(/(\d)(?=(\d{3})+$)/g, "$1" + e);
      }
      function S(t) {
        return parseFloat(t).toFixed(r["a"].state.settings.precision);
      }
      var C = a("3933"),
        v = a("63e5");
      function D(t) {
        t.$store.commit("updateCombatData", P(s)),
          t.$router.push("/encounter").then(function() {});
      }
      function k() {
        return {
          encounter: {
            duration: String.empty,
            dps: String.empty,
            damage: String.empty,
            deaths: String.empty
          },
          combatants: [{}]
        };
      }
      function P(t) {
        if ("0" !== t.Encounter.DURATION && "0" !== t.Encounter.damage) {
          var e = k(),
            a = t.Encounter;
          (e.encounter.duration = a.duration),
            (e.encounter.dps = u(a.encdps).formatted),
            (e.encounter.damage = d(a.damage).formatted),
            (e.encounter.deaths = a.deaths);
          for (var n = [], s = 0; s < Object.values(t.Combatant).length; s++) {
            var l = Object.values(t.Combatant)[s],
              h = u(l.encdps),
              m = {
                name: l.name,
                job: l.Job.toUpperCase(),
                _dps: h.sanitized,
                dps: h.formatted,
                hps: u(l.enchps).formatted,
                dmgPct: l["damage%"],
                chPct: l["crithit%"],
                dhPct: l["DirectHitPct"],
                cdhPct: l["CritDirectHitPct"],
                healPct: l["healed%"],
                overHealPct: l["OverHealPct"],
                maxHit: l["MAXHIT-*"],
                deaths: l["deaths"]
              };
            if ("" === m.job) {
              if (!m.name) continue;
              if ("Limit Break" === m.name) {
                if (!r["a"].state.settings.limitBreak) continue;
                (m.job = v["a"]),
                  r["a"].state.settings.styleLimitBreak && (m.name = i(m.name));
              } else if (o(m.name)) {
                if (!r["a"].state.settings.includePets) continue;
                (m.job = v["d"]), (m.name = c(m.name));
              } else {
                if (!r["a"].state.settings.includeJobless) continue;
                m.job = v["c"];
              }
            } else m.name = i(m.name);
            var p = r["a"].getters.jobDetails,
              b = p[m.job];
            b ||
              (Object(C["a"])("Can't find job.", m),
              (m.job = v["b"]),
              (b = p[m.job])),
              (m.role = b.role),
              (m.icon = b.icon),
              n.push(m);
          }
          var g = r["a"].state.settings.percentBarMode;
          if (0 === g && n)
            for (var f = 0; f < n.length; f++) n[f].percent = n[f].dmgPct;
          else if (1 === g && n.length > 1) {
            n[0].percent = 100;
            for (var S = 1; S < n.length; S++)
              n[S].percent = Math.round((n[S]._dps / n[0]._dps) * 100) + "%";
            n[0].percent += "%";
          }
          return (e.combatants = n), e;
        }
      }
    },
    "220a": function(t, e, a) {},
    "23cb8": function(t, e, a) {
      "use strict";
      var n = a("2d20"),
        s = a.n(n);
      s.a;
    },
    "25f8": function(t, e, a) {},
    "263e": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-row",
            { staticClass: "row", attrs: { fluid: "" } },
            [
              a("Label", { staticClass: "label", attrs: { label: t.label } }),
              a("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t.checkboxValue,
                    expression: "checkboxValue"
                  }
                ],
                staticClass: "checkbox",
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(t.checkboxValue)
                    ? t._i(t.checkboxValue, null) > -1
                    : t.checkboxValue
                },
                on: {
                  change: [
                    function(e) {
                      var a = t.checkboxValue,
                        n = e.target,
                        s = !!n.checked;
                      if (Array.isArray(a)) {
                        var r = null,
                          i = t._i(a, r);
                        n.checked
                          ? i < 0 && (t.checkboxValue = a.concat([r]))
                          : i > -1 &&
                            (t.checkboxValue = a
                              .slice(0, i)
                              .concat(a.slice(i + 1)));
                      } else t.checkboxValue = s;
                    },
                    t.selectCheckbox
                  ]
                }
              })
            ],
            1
          );
        },
        s = [],
        r = a("4e13"),
        i = {
          name: "Checkbox",
          props: { label: String, initialCheckboxValue: Boolean },
          components: { Label: r["a"] },
          data: function() {
            return { checkboxValue: this.initialCheckboxValue };
          },
          methods: {
            selectCheckbox: function() {
              this.$emit("change", this.checkboxValue);
            }
          }
        },
        o = i,
        c = (a("7942"), a("2877")),
        l = a("6544"),
        u = a.n(l),
        d = a("0fd9"),
        h = Object(c["a"])(o, n, s, !1, null, "7d525133", null);
      e["a"] = h.exports;
      u()(h, { VRow: d["a"] });
    },
    "282a": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a(
                "v-row",
                { staticClass: "row" },
                [
                  a(
                    "v-col",
                    { staticClass: "column" },
                    [a("Label", { attrs: { label: t.label } })],
                    1
                  )
                ],
                1
              ),
              a(
                "v-row",
                { staticClass: "row" },
                [
                  a("v-col", { staticClass: "column" }, [
                    a("div", { staticClass: "select" }, [
                      a("input", {
                        staticClass: "select-input",
                        style: t.selectStyle,
                        domProps: { value: t.selectedItem.name },
                        on: {
                          focus: function(e) {
                            return t.showItems();
                          },
                          blur: function(e) {
                            return t.hideItems();
                          }
                        }
                      }),
                      a(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.displayItems,
                              expression: "displayItems"
                            }
                          ],
                          staticClass: "select-content"
                        },
                        t._l(t.items, function(e, n) {
                          return a(
                            "div",
                            {
                              key: n,
                              staticClass: "select-item",
                              style: t.selectStyle,
                              on: {
                                mousedown: function(a) {
                                  return t.selectItem(e);
                                }
                              }
                            },
                            [t._v(" " + t._s(e.name) + " ")]
                          );
                        }),
                        0
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          );
        },
        s = [],
        r = (a("a9e3"), a("4e13")),
        i = {
          name: "Select",
          components: { Label: r["a"] },
          props: { label: String, items: Array, currentItemId: Number },
          data: function() {
            return {
              selectedItem: this.items[this.currentItemId],
              displayItems: !1
            };
          },
          computed: {
            selectStyle: function() {
              return {
                color: this.$store.state.settings.fontColor,
                backgroundColor: this.$store.state.settings._foregroundColor
              };
            }
          },
          methods: {
            showItems: function() {
              this.displayItems = !0;
            },
            hideItems: function() {
              this.displayItems = !1;
            },
            selectItem: function(t) {
              (this.selectedItem = t),
                (this.displayItems = !1),
                this.$emit("change", this.selectedItem.id);
            }
          }
        },
        o = i,
        c = (a("5226"), a("2877")),
        l = a("6544"),
        u = a.n(l),
        d = a("62ad"),
        h = a("0fd9"),
        m = Object(c["a"])(o, n, s, !1, null, "a39aef00", null);
      e["a"] = m.exports;
      u()(m, { VCol: d["a"], VRow: h["a"] });
    },
    "288f": function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var _lib_combatData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "213f"
        ),
        _lib_primaryPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "6fdb"
        );
      __webpack_exports__["a"] = {
        name: "EncounterMenu",
        computed: {
          menuItems: function() {
            return [
              { title: this.$t("actions.view-encounter"), path: "/encounter" },
              { title: this.$t("actions.reset-encounter"), path: "/" },
              {
                title: this.$t("actions.load-sample-data"),
                action: "loadSampleData",
                path: "/encounter"
              }
            ];
          },
          encounterMenuIcon: function() {
            return this.$store.getters.menuIcon;
          },
          encounterMenuStyle: function() {
            return {
              backgroundColor: this.$store.state.settings.backgroundColor,
              color: this.$store.state.settings.fontColor
            };
          },
          encounterMenuIconStyle: function() {
            return { fill: this.$store.state.settings.fontColor };
          }
        },
        methods: {
          selectMenuItem: function selectMenuItem(menuItem) {
            menuItem.action && eval("this." + menuItem.action + "()"),
              menuItem.path &&
                (this.$store.commit("update", { collapsed: !1 }),
                this.$router.push(menuItem.path));
          },
          loadSampleData: function() {
            Object(_lib_primaryPlayer__WEBPACK_IMPORTED_MODULE_1__["a"])(this),
              Object(_lib_combatData__WEBPACK_IMPORTED_MODULE_0__["a"])(this);
          }
        }
      };
    },
    "2bf7": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            { staticClass: "default", style: t.defaultStyle },
            [
              a("Splash", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.showSplash,
                    expression: "showSplash"
                  }
                ],
                staticClass: "default-section"
              }),
              a("Waiting", { staticClass: "default-section" }),
              a("Github", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.showGithub,
                    expression: "showGithub"
                  }
                ],
                staticClass: "default-section"
              })
            ],
            1
          );
        },
        s = [],
        r = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "splash-container" },
            [
              a("div", { staticClass: "splash-title" }, [t._v(t._s(t.title))]),
              t._l(t.messages, function(e) {
                return a("div", { key: e, staticClass: "splash-message" }, [
                  t._v(" " + t._s(e) + " ")
                ]);
              })
            ],
            2
          );
        },
        i = [],
        o = {
          version: 7,
          title: "May your queues be short",
          messages: ["Added Sage and Reaper."]
        },
        c = o,
        l = {
          name: "Splash",
          data: function() {
            return { version: c.version, title: c.title, messages: c.messages };
          }
        },
        u = l,
        d = (a("1b38"), a("2877")),
        h = Object(d["a"])(u, r, i, !1, null, "24858e70", null),
        m = h.exports,
        p = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a("div", { staticClass: "questions feedback" }, [
              t._v(t._s(this.$t("default.questions")))
            ]),
            a(
              "div",
              {
                staticClass: "link feedback",
                style: t.link,
                on: { click: t.openGithub }
              },
              [t._v(" " + t._s(this.$t("default.github")) + " ")]
            )
          ]);
        },
        b = [],
        g = {
          name: "Github",
          computed: {
            link: function() {
              return { color: this.$store.state.settings.fontColor };
            }
          },
          methods: {
            openGithub: function() {
              window.open("https://github.com/kalilistic/klondike", "_blank");
            }
          }
        },
        f = g,
        S = (a("c9dc"), Object(d["a"])(f, p, b, !1, null, "34ae87b2", null)),
        C = S.exports,
        v = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "waiting" }, [
            t._v(t._s(this.$t("default.waiting")))
          ]);
        },
        D = [],
        k = { name: "Waiting" },
        P = k,
        y = (a("17eb"), Object(d["a"])(P, v, D, !1, null, "1d4c2434", null)),
        A = y.exports,
        H = {
          name: "Default",
          components: { Github: C, Waiting: A, Splash: m },
          computed: {
            defaultStyle: function() {
              return {
                display: this.$store.state.settings._mainDisplay,
                backgroundColor: this.$store.state.settings.backgroundColor
              };
            },
            showSplash: function() {
              return (
                !!(
                  this.$store.state.settings.alwaysShowSplash ||
                  this.$store.state.settings.latestSplashSeen < c.version
                ) && (this.updateSplash(), !0)
              );
            },
            showGithub: function() {
              return this.$store.state.settings.showGithub;
            }
          },
          methods: {
            updateSplash: function() {
              this.$store.commit("update", { latestSplashSeen: c.version });
            }
          },
          mounted: function() {
            this.$store.commit("resetCombatData");
          }
        },
        E = H,
        w = (a("5332"), a("6544")),
        M = a.n(w),
        x = a("a75b"),
        $ = Object(d["a"])(E, n, s, !1, null, "05a8d474", null);
      e["a"] = $.exports;
      M()($, { VContent: x["a"] });
    },
    "2d20": function(t, e, a) {},
    3098: function(t, e, a) {},
    3299: function(t, e, a) {},
    3347: function(t, e, a) {
      "use strict";
      a.d(e, "a", function() {
        return r;
      });
      var n = a("4360"),
        s = a("416e");
      function r(t) {
        var e = n["a"].getters.languages,
          a = e[n["a"].state.settings.languageId];
        0 === a.id
          ? Object(s["c"])().then(function(a) {
              var n = e[a];
              t.$root.$i18n.locale = n.locale;
            })
          : (t.$root.$i18n.locale = a.locale);
      }
    },
    3496: function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            [
              a("Select", {
                attrs: {
                  label: "settings.language",
                  "current-item-id": t.settings.languageId,
                  items: t.validValues.languages
                },
                on: {
                  change: function(e) {
                    t.settings.languageId = e;
                  }
                }
              }),
              a("Checkbox", {
                attrs: {
                  label: "settings.always-show-splash",
                  initialCheckboxValue: t.settings.alwaysShowSplash
                },
                on: {
                  change: function(e) {
                    t.settings.alwaysShowSplash = e;
                  }
                }
              }),
              a("Checkbox", {
                attrs: {
                  label: "settings.show-github",
                  initialCheckboxValue: t.settings.showGithub
                },
                on: {
                  change: function(e) {
                    t.settings.showGithub = e;
                  }
                }
              }),
              a("Checkbox", {
                attrs: {
                  label: "settings.logging",
                  initialCheckboxValue: t.settings.logging
                },
                on: {
                  change: function(e) {
                    t.settings.logging = e;
                  }
                }
              }),
              a("SettingButtons", { on: { reset: t.reset, update: t.update } }),
              a("Button", {
                staticClass: "reset-all",
                attrs: { label: "actions.reset-all" },
                on: { click: t.resetAll }
              })
            ],
            1
          );
        },
        s = [],
        r = a("0124"),
        i = a("282a"),
        o = a("263e"),
        c = a("4b1b"),
        l = a("3347"),
        u = {
          name: "Advanced",
          components: {
            Button: c["a"],
            Select: i["a"],
            Checkbox: o["a"],
            SettingButtons: r["a"]
          },
          data: function() {
            return {
              settings: {
                languageId: this.$store.state.settings.languageId,
                backgroundColor: this.$store.state.settings.backgroundColor,
                fontColor: this.$store.state.settings.fontColor,
                alwaysShowSplash: this.$store.state.settings.alwaysShowSplash,
                showGithub: this.$store.state.settings.showGithub,
                logging: this.$store.state.settings.logging
              },
              validValues: {
                languages: this.$store.state.validValues.languages
              }
            };
          },
          methods: {
            resetAll: function() {
              this.$store.commit("resetAll"),
                Object(l["a"])(this),
                this.$router.push("/");
            },
            reset: function() {
              this.$emit("reset", this.settings);
            },
            update: function() {
              this.$emit("update", this.settings);
            }
          }
        },
        d = u,
        h = (a("ab66"), a("2877")),
        m = a("6544"),
        p = a.n(m),
        b = a("a75b"),
        g = Object(h["a"])(d, n, s, !1, null, "a2b3fea6", null);
      e["a"] = g.exports;
      p()(g, { VContent: b["a"] });
    },
    3933: function(t, e, a) {
      "use strict";
      a.d(e, "a", function() {
        return r;
      });
      var n = a("5e71"),
        s = a("4360");
      function r(t, e) {
        if (s["a"].state.settings.logging) {
          var a = t;
          e && (a = ": " + Object(n["stringify"])(e)), console.log(a);
        }
      }
    },
    "3c88": function(t, e, a) {},
    "3dfd": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-app",
            { style: t.appStyle },
            [a("Header"), a("router-view")],
            1
          );
        },
        s = [],
        r = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { style: t.headerStyle },
            [
              a(
                "v-content",
                { staticClass: "header-container" },
                [
                  a(
                    "v-layout",
                    [
                      a("Title"),
                      a(
                        "v-row",
                        [
                          a(
                            "v-col",
                            { staticClass: "column header-menus" },
                            [
                              a("Toggle"),
                              a("SettingsMenu"),
                              a("EncounterMenu")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          );
        },
        i = [],
        o = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "header-title" }, [
            t._v(" " + t._s(this.$t("header.title")) + " ")
          ]);
        },
        c = [],
        l = { name: "Title" },
        u = l,
        d = (a("c6ad"), a("2877")),
        h = Object(d["a"])(u, o, c, !1, null, "67cad438", null),
        m = h.exports,
        p = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-menu",
            {
              attrs: { bottom: "", left: "" },
              scopedSlots: t._u([
                {
                  key: "activator",
                  fn: function(e) {
                    var n = e.on;
                    return [
                      a(
                        "div",
                        t._g(
                          {
                            staticClass: "settings-menu-icon",
                            style: t.settingsMenuIconStyle,
                            domProps: { innerHTML: t._s(t.settingsMenuIcon) }
                          },
                          n
                        )
                      )
                    ];
                  }
                }
              ])
            },
            [
              a(
                "v-list",
                {
                  staticClass: "settings-menu-style",
                  style: t.settingsMenuStyle
                },
                t._l(t.menuItems, function(e, n) {
                  return a(
                    "v-list-item",
                    {
                      key: n,
                      staticClass: "settings-menu-item",
                      on: {
                        click: function(a) {
                          return t.selectMenuItem(e);
                        }
                      }
                    },
                    [
                      a("v-list-item-title", { style: t.settingsMenuStyle }, [
                        t._v(t._s(e.title))
                      ])
                    ],
                    1
                  );
                }),
                1
              )
            ],
            1
          );
        },
        b = [],
        g = {
          name: "SettingsMenu",
          computed: {
            menuItems: function() {
              return [
                {
                  title: this.$t("views.general-style"),
                  path: "/settings/general"
                },
                { title: this.$t("views.names"), path: "/settings/names" },
                { title: this.$t("views.numbers"), path: "/settings/numbers" },
                {
                  title: this.$t("views.player-details"),
                  path: "/settings/player-details"
                },
                {
                  title: this.$t("views.job-icons"),
                  path: "/settings/job-icons"
                },
                {
                  title: this.$t("views.percent-bar"),
                  path: "/settings/percent-bar"
                },
                {
                  title: this.$t("views.percent-bar-you"),
                  path: "/settings/percent-bar-you"
                },
                {
                  title: this.$t("views.percent-bar-role"),
                  path: "/settings/percent-bar-role"
                },
                { title: this.$t("views.advanced"), path: "/settings/advanced" }
              ];
            },
            settingsMenuIcon: function() {
              return this.$store.getters.settingsIcon;
            },
            settingsMenuStyle: function() {
              return {
                backgroundColor: this.$store.state.settings.backgroundColor,
                color: this.$store.state.settings.fontColor
              };
            },
            settingsMenuIconStyle: function() {
              return { fill: this.$store.state.settings.fontColor };
            }
          },
          methods: {
            selectMenuItem: function(t) {
              this.$store.commit("update", { collapsed: !1 }),
                this.$router.push(t.path);
            }
          }
        },
        f = g,
        S = (a("9bbb"), a("6544")),
        C = a.n(S),
        v = a("8860"),
        D = a("da13"),
        k = a("5d23"),
        P = a("e449"),
        y = Object(d["a"])(f, p, b, !1, null, "8f5302a8", null),
        A = y.exports;
      C()(y, {
        VList: v["a"],
        VListItem: D["a"],
        VListItemTitle: k["a"],
        VMenu: P["a"]
      });
      var H = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-menu",
            {
              staticClass: "encounter-menu",
              attrs: { bottom: "", left: "" },
              scopedSlots: t._u([
                {
                  key: "activator",
                  fn: function(e) {
                    var n = e.on;
                    return [
                      a(
                        "div",
                        t._g(
                          {
                            staticClass: "encounter-menu-icon",
                            style: t.encounterMenuIconStyle,
                            domProps: { innerHTML: t._s(t.encounterMenuIcon) }
                          },
                          n
                        )
                      )
                    ];
                  }
                }
              ])
            },
            [
              a(
                "v-list",
                {
                  staticClass: "encounter-menu-style",
                  style: t.encounterMenuStyle
                },
                t._l(t.menuItems, function(e, n) {
                  return a(
                    "v-list-item",
                    {
                      key: n,
                      staticClass: "encounter-menu-item",
                      on: {
                        click: function(a) {
                          return t.selectMenuItem(e);
                        }
                      }
                    },
                    [
                      a("v-list-item-title", { style: t.encounterMenuStyle }, [
                        t._v(t._s(e.title))
                      ])
                    ],
                    1
                  );
                }),
                1
              )
            ],
            1
          );
        },
        E = [],
        w = a("288f"),
        M = w["a"],
        x = (a("a962"), Object(d["a"])(M, H, E, !1, null, "7a031296", null)),
        $ = x.exports;
      C()(x, {
        VList: v["a"],
        VListItem: D["a"],
        VListItemTitle: k["a"],
        VMenu: P["a"]
      });
      var I = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", {
            staticClass: "toggle-menu-icon",
            style: t.toggleIconStyle,
            domProps: { innerHTML: t._s(t.toggleIcon) },
            on: { click: t.toggle }
          });
        },
        _ = [],
        N = {
          name: "Toggle",
          computed: {
            collapsed: function() {
              return this.$store.state.settings.collapsed;
            },
            toggleIcon: function() {
              return this.collapsed
                ? this.$store.getters.openIcon
                : this.$store.getters.closeIcon;
            },
            toggleIconStyle: function() {
              return { fill: this.$store.state.settings.fontColor };
            }
          },
          methods: {
            toggle: function() {
              this.collapsed && this.$router.push("/"),
                this.$store.commit("update", { collapsed: !this.collapsed });
            }
          }
        },
        L = N,
        B = (a("1696"), Object(d["a"])(L, I, _, !1, null, "12135933", null)),
        O = B.exports,
        j = {
          name: "Header",
          components: {
            Toggle: O,
            EncounterMenu: $,
            Title: m,
            SettingsMenu: A
          },
          computed: {
            headerStyle: function() {
              return {
                backgroundColor: this.$store.state.settings.backgroundColor
              };
            }
          }
        },
        T = j,
        K = (a("23cb8"), a("62ad")),
        V = a("a75b"),
        R = a("a722"),
        G = a("0fd9"),
        X = Object(d["a"])(T, r, i, !1, null, "adb259de", null),
        z = X.exports;
      C()(X, { VCol: K["a"], VContent: V["a"], VLayout: R["a"], VRow: G["a"] });
      var W = a("416e"),
        J = a("3347"),
        U = a("3933");
      a("c919");
      var F = {
          name: "Overlay",
          components: { Header: z },
          computed: {
            appStyle: function() {
              return {
                fontFamily: "Lato, serif",
                backgroundColor: "transparent",
                color: this.$store.state.settings.fontColor,
                fill: this.$store.state.settings.iconColor,
                opacity: this.$store.state.settings.opacity / 100
              };
            }
          },
          mounted: function() {
            Object(U["a"])("klondike mounted"),
              "/" !== this.$router.currentRoute.path && this.$router.push("/"),
              Object(W["a"])(this),
              Object(W["b"])(this),
              Object(W["d"])(),
              Object(J["a"])(this);
          }
        },
        Y = F,
        q = (a("5c0b"), a("b0a0"), a("7496")),
        Z = Object(d["a"])(Y, n, s, !1, null, null, null);
      e["a"] = Z.exports;
      C()(Z, { VApp: q["a"] });
    },
    "416e": function(t, e, a) {
      "use strict";
      a.d(e, "a", function() {
        return o;
      }),
        a.d(e, "b", function() {
          return l;
        }),
        a.d(e, "c", function() {
          return d;
        }),
        a.d(e, "d", function() {
          return m;
        });
      a("96cf");
      var n = a("1da1"),
        s = a("213f"),
        r = a("3933"),
        i = a("6fdb");
      function o(t) {
        return c.apply(this, arguments);
      }
      function c() {
        return (
          (c = Object(n["a"])(
            regeneratorRuntime.mark(function t(e) {
              return regeneratorRuntime.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      Object(r["a"])("adding combatData overlay listener"),
                        addOverlayListener("CombatData", function(t) {
                          Object(r["a"])("raw combatData", t);
                          var a = Object(s["c"])(t);
                          Object(r["a"])("parsed combatData", a),
                            a &&
                              (Object(r["a"])("committing combatData"),
                              e.$store.commit("updateCombatData", a),
                              "/" === e.$router.currentRoute.path &&
                                e.$router.push("/encounter"));
                        });
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          c.apply(this, arguments)
        );
      }
      function l(t) {
        return u.apply(this, arguments);
      }
      function u() {
        return (
          (u = Object(n["a"])(
            regeneratorRuntime.mark(function t(e) {
              return regeneratorRuntime.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      Object(r["a"])("adding primaryPlayer overlay listener"),
                        addOverlayListener("ChangePrimaryPlayer", function(t) {
                          Object(r["a"])("raw changePrimaryPlayer", t);
                          var a = Object(i["b"])(t);
                          Object(r["a"])("parsed primaryPlayer", a),
                            a &&
                              (Object(r["a"])("committing primaryPlayer"),
                              e.$store.commit("updatePrimaryPlayer", a));
                        });
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          u.apply(this, arguments)
        );
      }
      function d() {
        return h.apply(this, arguments);
      }
      function h() {
        return (
          (h = Object(n["a"])(
            regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        callOverlayHandler({ call: "getLanguage" })
                      );
                    case 2:
                      return (e = t.sent), t.abrupt("return", e.languageId);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          h.apply(this, arguments)
        );
      }
      function m() {
        return p.apply(this, arguments);
      }
      function p() {
        return (
          (p = Object(n["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      Object(r["a"])("starting overlay events"),
                        startOverlayEvents();
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          p.apply(this, arguments)
        );
      }
    },
    "41af": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            [
              a("Checkbox", {
                attrs: {
                  label: "settings.percent-bar-role",
                  initialCheckboxValue: t.settings.percentBarRole
                },
                on: {
                  change: function(e) {
                    t.settings.percentBarRole = e;
                  }
                }
              }),
              a("ColorPicker", {
                attrs: {
                  label: "settings.percent-bar-color-tank",
                  "initial-color": t.settings.percentBarColorTank
                },
                on: {
                  change: function(e) {
                    t.settings.percentBarColorTank = e;
                  }
                }
              }),
              a("ColorPicker", {
                attrs: {
                  label: "settings.percent-bar-color-heal",
                  "initial-color": t.settings.percentBarColorHeal
                },
                on: {
                  change: function(e) {
                    t.settings.percentBarColorHeal = e;
                  }
                }
              }),
              a("ColorPicker", {
                attrs: {
                  label: "settings.percent-bar-color-dps",
                  "initial-color": t.settings.percentBarColorDps
                },
                on: {
                  change: function(e) {
                    t.settings.percentBarColorDps = e;
                  }
                }
              }),
              a("SettingButtons", { on: { reset: t.reset, update: t.update } })
            ],
            1
          );
        },
        s = [],
        r = a("0124"),
        i = a("263e"),
        o = a("1368"),
        c = {
          name: "PercentBarRole",
          components: {
            Checkbox: i["a"],
            ColorPicker: o["a"],
            SettingButtons: r["a"]
          },
          data: function() {
            return {
              settings: {
                percentBarRole: this.$store.state.settings.percentBarRole,
                percentBarColorTank: this.$store.state.settings
                  .percentBarColorTank,
                percentBarColorHeal: this.$store.state.settings
                  .percentBarColorHeal,
                percentBarColorDps: this.$store.state.settings
                  .percentBarColorDps
              }
            };
          },
          methods: {
            reset: function() {
              this.$emit("reset", this.settings);
            },
            update: function() {
              this.$emit("update", this.settings);
            }
          }
        },
        l = c,
        u = a("2877"),
        d = a("6544"),
        h = a.n(d),
        m = a("a75b"),
        p = Object(u["a"])(l, n, s, !1, null, null, null);
      e["a"] = p.exports;
      h()(p, { VContent: m["a"] });
    },
    "456d": function(t, e, a) {},
    "467f": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            [
              a("Select", {
                attrs: {
                  label: "settings.secondary-stat",
                  "current-item-id": t.settings.secondaryStat,
                  items: t.validValues.additionalStats
                },
                on: {
                  change: function(e) {
                    t.settings.secondaryStat = e;
                  }
                }
              }),
              a("Checkbox", {
                attrs: {
                  label: "settings.limit-break",
                  initialCheckboxValue: t.settings.limitBreak
                },
                on: {
                  change: function(e) {
                    t.settings.limitBreak = e;
                  }
                }
              }),
              a("Checkbox", {
                attrs: {
                  label: "settings.include-pets",
                  initialCheckboxValue: t.settings.includePets
                },
                on: {
                  change: function(e) {
                    t.settings.includePets = e;
                  }
                }
              }),
              a("Checkbox", {
                attrs: {
                  label: "settings.include-jobless",
                  initialCheckboxValue: t.settings.includeJobless
                },
                on: {
                  change: function(e) {
                    t.settings.includeJobless = e;
                  }
                }
              }),
              a("SettingButtons", { on: { reset: t.reset, update: t.update } })
            ],
            1
          );
        },
        s = [],
        r = a("0124"),
        i = a("263e"),
        o = a("282a"),
        c = {
          name: "PlayerDetails",
          components: {
            Select: o["a"],
            Checkbox: i["a"],
            SettingButtons: r["a"]
          },
          data: function() {
            return {
              settings: {
                secondaryStat: this.$store.state.settings.secondaryStat,
                limitBreak: this.$store.state.settings.limitBreak,
                includePets: this.$store.state.settings.includePets,
                includeJobless: this.$store.state.settings.includeJobless
              },
              validValues: {
                additionalStats: this.$store.state.validValues.additionalStats
              }
            };
          },
          methods: {
            reset: function() {
              this.$emit("reset", this.settings);
            },
            update: function() {
              this.$emit("update", this.settings);
            }
          }
        },
        l = c,
        u = a("2877"),
        d = a("6544"),
        h = a.n(d),
        m = a("a75b"),
        p = Object(u["a"])(l, n, s, !1, null, null, null);
      e["a"] = p.exports;
      h()(p, { VContent: m["a"] });
    },
    "481c": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            [
              a("Checkbox", {
                attrs: {
                  label: "settings.abbreviate-numbers",
                  initialCheckboxValue: t.settings.abbreviateNumbers
                },
                on: {
                  change: function(e) {
                    t.settings.abbreviateNumbers = e;
                  }
                }
              }),
              a("Slider", {
                attrs: {
                  label: "settings.precision",
                  min: 0,
                  max: 2,
                  "initial-slider-value": t.settings.precision,
                  formatter: "{value}"
                },
                on: {
                  change: function(e) {
                    t.settings.precision = e;
                  }
                }
              }),
              a("Select", {
                attrs: {
                  label: "settings.digit-sep",
                  "current-item-id": t.settings.digitSepId,
                  items: t.validValues.digitSeps
                },
                on: {
                  change: function(e) {
                    t.settings.digitSepId = e;
                  }
                }
              }),
              a("Select", {
                attrs: {
                  label: "settings.decimal-sep",
                  "current-item-id": t.settings.decimalSepId,
                  items: t.validValues.decimalSeps
                },
                on: {
                  change: function(e) {
                    t.settings.decimalSepId = e;
                  }
                }
              }),
              a("SettingButtons", { on: { reset: t.reset, update: t.update } })
            ],
            1
          );
        },
        s = [],
        r = a("0124"),
        i = a("263e"),
        o = a("c520"),
        c = a("282a"),
        l = {
          name: "Numbers",
          components: {
            Checkbox: i["a"],
            Select: c["a"],
            Slider: o["a"],
            SettingButtons: r["a"]
          },
          data: function() {
            return {
              settings: {
                abbreviateNumbers: this.$store.state.settings.abbreviateNumbers,
                precision: this.$store.state.settings.precision,
                digitSepId: this.$store.state.settings.digitSepId,
                decimalSepId: this.$store.state.settings.decimalSepId
              },
              validValues: {
                digitSeps: this.$store.state.validValues.digitSeps,
                decimalSeps: this.$store.state.validValues.decimalSeps
              }
            };
          },
          methods: {
            reset: function() {
              this.$emit("reset", this.settings);
            },
            update: function() {
              this.$emit("update", this.settings);
            }
          }
        },
        u = l,
        d = a("2877"),
        h = a("6544"),
        m = a.n(h),
        p = a("a75b"),
        b = Object(d["a"])(u, n, s, !1, null, null, null);
      e["a"] = b.exports;
      m()(b, { VContent: p["a"] });
    },
    "49f8": function(t, e, a) {
      var n = {
        "./cn.json": "f4a5",
        "./de.json": "6ce2",
        "./en.json": "edd4",
        "./fr.json": "f693",
        "./ja.json": "0423",
        "./kr.json": "c1af"
      };
      function s(t) {
        var e = r(t);
        return a(e);
      }
      function r(t) {
        if (!a.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return n[t];
      }
      (s.keys = function() {
        return Object.keys(n);
      }),
        (s.resolve = r),
        (t.exports = s),
        (s.id = "49f8");
    },
    "4ae9": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            [
              a("Checkbox", {
                attrs: {
                  label: "settings.percent-bar-you",
                  initialCheckboxValue: t.settings.percentBarYou
                },
                on: {
                  change: function(e) {
                    t.settings.percentBarYou = e;
                  }
                }
              }),
              a("ColorPicker", {
                attrs: {
                  label: "settings.percent-bar-color-you",
                  "initial-color": t.settings.percentBarColorYou
                },
                on: {
                  change: function(e) {
                    t.settings.percentBarColorYou = e;
                  }
                }
              }),
              a("SettingButtons", { on: { reset: t.reset, update: t.update } })
            ],
            1
          );
        },
        s = [],
        r = a("0124"),
        i = a("263e"),
        o = a("1368"),
        c = {
          name: "PercentBarYou",
          components: {
            Checkbox: i["a"],
            ColorPicker: o["a"],
            SettingButtons: r["a"]
          },
          data: function() {
            return {
              settings: {
                percentBarYou: this.$store.state.settings.percentBarYou,
                percentBarColorYou: this.$store.state.settings
                  .percentBarColorYou
              }
            };
          },
          methods: {
            reset: function() {
              this.$emit("reset", this.settings);
            },
            update: function() {
              this.$emit("update", this.settings);
            }
          }
        },
        l = c,
        u = a("2877"),
        d = a("6544"),
        h = a.n(d),
        m = a("a75b"),
        p = Object(u["a"])(l, n, s, !1, null, null, null);
      e["a"] = p.exports;
      h()(p, { VContent: m["a"] });
    },
    "4b1b": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-btn",
            {
              staticClass: "button",
              style: t.buttonStyle,
              attrs: { small: "", ripple: !1 },
              on: { click: t.click }
            },
            [t._v(t._s(t.translatedLabel))]
          );
        },
        s = [],
        r = {
          name: "Button",
          props: { label: String },
          data: function() {
            return { translatedLabel: this.$t(this.label) };
          },
          computed: {
            buttonStyle: function() {
              return {
                backgroundColor: this.$store.state.settings._controlColor,
                minWidth: "76px"
              };
            }
          },
          methods: {
            click: function() {
              this.$emit("click");
            }
          }
        },
        i = r,
        o = (a("9393"), a("2877")),
        c = a("6544"),
        l = a.n(c),
        u = a("8336"),
        d = Object(o["a"])(i, n, s, !1, null, "ec4322ec", null);
      e["a"] = d.exports;
      l()(d, { VBtn: u["a"] });
    },
    "4e13": function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("span", { staticClass: "label" }, [
            t._v(t._s(t.translatedLabel))
          ]);
        },
        s = [],
        r = {
          name: "Label",
          props: ["label"],
          data: function() {
            return { translatedLabel: this.$t(this.label) };
          }
        },
        i = r,
        o = (a("c96d"), a("2877")),
        c = Object(o["a"])(i, n, s, !1, null, "5347db06", null);
      e["a"] = c.exports;
    },
    5226: function(t, e, a) {
      "use strict";
      var n = a("6df1"),
        s = a.n(n);
      s.a;
    },
    5332: function(t, e, a) {
      "use strict";
      var n = a("98b5"),
        s = a.n(n);
      s.a;
    },
    "56d7": function(t, e, a) {
      "use strict";
      a.r(e),
        function(t) {
          a("e260"), a("e6cf"), a("cca6"), a("a79d");
          var e = a("2b0e"),
            n = a("8c4f"),
            s = a("3dfd"),
            r = a("4360"),
            i = a("402c"),
            o = a("d3a4"),
            c = a("641b");
          (e["default"].config.productionTip = !1),
            (e["default"].config.devtools = !1),
            e["default"].use(n["a"]);
          var l = new n["a"]({ base: t + "/klondike/", routes: c["a"] }),
            u = n["a"].prototype.push;
          (n["a"].prototype.push = function(t, e, a) {
            return e || a
              ? u.call(this, t, e, a)
              : u.call(this, t).catch(function(t) {
                  return t;
                });
          }),
            new e["default"]({
              router: l,
              store: r["a"],
              vuetify: i["a"],
              i18n: o["a"],
              render: function(t) {
                return t(s["a"]);
              }
            }).$mount("#app");
        }.call(this, "/");
    },
    5930: function(t, e, a) {
      "use strict";
      a.d(e, "e", function() {
        return n;
      }),
        a.d(e, "d", function() {
          return s;
        }),
        a.d(e, "b", function() {
          return r;
        }),
        a.d(e, "c", function() {
          return i;
        }),
        a.d(e, "a", function() {
          return o;
        });
      var n = "Tank",
        s = "Healer",
        r = "DPS",
        i = "Gatherer",
        o = "Crafter";
    },
    "5c0b": function(t, e, a) {
      "use strict";
      var n = a("7694"),
        s = a.n(n);
      s.a;
    },
    "63e5": function(t, e, a) {
      "use strict";
      a.d(e, "a", function() {
        return n;
      }),
        a.d(e, "d", function() {
          return s;
        }),
        a.d(e, "c", function() {
          return r;
        }),
        a.d(e, "b", function() {
          return i;
        });
      var n = "LMB",
        s = "PET",
        r = "MOB",
        i = "MIS";
    },
    6658: function(t, e, a) {},
    "6ce2": function(t) {
      t.exports = JSON.parse(
        '{"header":{"title":"klondike"},"default":{"waiting":"warten auf begegnung...","questions":"fragen / ideen?","github":"blick auf die github seite"},"encounter":{"duration":"Dauer: ","dps":"Total: ","encounter":"Begegnung","damage":"Schaden","deaths":"Todesfälle"},"combatant":{"dmg-pct":"DMG%","ch-pct":"CH%","dh-pct":"DH%","cdh-pct":"CDH%","heal-pct":"Heal%","over-heal-pct":"OvHeal%","hps":"HPS","max-hit":"MaxHit","deaths":"Todesfälle"},"actions":{"view-encounter":"Begegnung anzeigen","reset-encounter":"Begegnung zurücksetzen","load-sample-data":"Beispieldaten laden","reset-all":"Alles zurücksetzen","reset":"Zurücksetzen","save":"Speichern"},"views":{"general-style":"Allgemeiner Stil","names":"Namensstil","numbers":"Zahlenformat","player-details":"Spielerdetails","job-icons":"Job Icons","percent-bar":"Prozentbalken","percent-bar-you":"Prozentbalken (SIE)","percent-bar-role":"Prozentbalken (Rolle)","advanced":"Fortgeschritten"},"settings":{"language":"Sprache","limit-break":"Limit-Break einschließen","background-color":"Hintergrundfarbe","font-color":"Schriftfarbe","name-style":"Namensstil","style-limit-break":"Style LB","blur-names":"Unschärfennamen","abbreviate-numbers":"Abkürzungsnummern","precision":"Präzision","job-icons":"Job-Symbole aktivieren","job-icon-size":"Symbolgröße","job-icon-color":"Symbolfarbe","blur-job-icons":"Unschärfesymbole","percent-bar":"Prozentbalken aktivieren","percent-bar-mode":"Prozentbalkenmodus","percent-bar-color":"Prozentbalkenfarbe","opacity":"Deckkraft","logging":"Aktiviere das Logging","digit-sep":"Ziffernabscheider","decimal-sep":"Dezimaltrennzeichen","include-pets":"Haustiere einschließen","include-jobless":"Arbeitslose einbeziehen","always-show-splash":"Immer Willkommen zeigen","show-github":"GitHub Info anzeigen","percent-bar-you":"Aktivieren Sie Ihre Balkenfarbe","percent-bar-color-you":"Ihre Balkenfarbe","percent-bar-role":"Aktivieren Sie Balkenfarben nach Rolle","percent-bar-color-tank":"Tank Balkenfarbe","percent-bar-color-heal":"Healer Balkenfarbe","percent-bar-color-dps":"DPS Balkenfarbe","secondary-stat":"Sekundärstat"}}'
      );
    },
    "6df1": function(t, e, a) {},
    "6fdb": function(t, e, a) {
      "use strict";
      a.d(e, "a", function() {
        return r;
      }),
        a.d(e, "b", function() {
          return i;
        });
      var n = {
          type: "ChangePrimaryPlayer",
          charID: 123456789,
          charName: "Anna Pavlova"
        },
        s = n;
      function r(t) {
        var e = i(s);
        t.$store.commit("updatePrimaryPlayer", e);
      }
      function i(t) {
        if (t) return t.charName;
      }
    },
    "720f": function(t, e, a) {
      "use strict";
      var n = a("6658"),
        s = a.n(n);
      s.a;
    },
    "73ec": function(t, e, a) {},
    7694: function(t, e, a) {},
    7725: function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            [
              a("Checkbox", {
                attrs: {
                  label: "settings.percent-bar",
                  initialCheckboxValue: t.settings.percentBar
                },
                on: {
                  change: function(e) {
                    t.settings.percentBar = e;
                  }
                }
              }),
              a("Select", {
                attrs: {
                  label: "settings.percent-bar-mode",
                  "current-item-id": t.settings.percentBarMode,
                  items: t.validValues.percentBarModes
                },
                on: {
                  change: function(e) {
                    t.settings.percentBarMode = e;
                  }
                }
              }),
              a("ColorPicker", {
                attrs: {
                  label: "settings.percent-bar-color",
                  "initial-color": t.settings.percentBarColor
                },
                on: {
                  change: function(e) {
                    t.settings.percentBarColor = e;
                  }
                }
              }),
              a("SettingButtons", { on: { reset: t.reset, update: t.update } })
            ],
            1
          );
        },
        s = [],
        r = a("0124"),
        i = a("263e"),
        o = a("1368"),
        c = a("282a"),
        l = {
          name: "PercentBar",
          components: {
            Checkbox: i["a"],
            Select: c["a"],
            ColorPicker: o["a"],
            SettingButtons: r["a"]
          },
          data: function() {
            return {
              settings: {
                percentBar: this.$store.state.settings.percentBar,
                percentBarMode: this.$store.state.settings.percentBarMode,
                percentBarColor: this.$store.state.settings.percentBarColor
              },
              validValues: {
                percentBarModes: this.$store.state.validValues.percentBarModes
              }
            };
          },
          methods: {
            reset: function() {
              this.$emit("reset", this.settings);
            },
            update: function() {
              this.$emit("update", this.settings);
            }
          }
        },
        u = l,
        d = a("2877"),
        h = a("6544"),
        m = a.n(h),
        p = a("a75b"),
        b = Object(d["a"])(u, n, s, !1, null, null, null);
      e["a"] = b.exports;
      m()(b, { VContent: p["a"] });
    },
    "77e6": function(t, e, a) {},
    7942: function(t, e, a) {
      "use strict";
      var n = a("3c88"),
        s = a.n(n);
      s.a;
    },
    "917a": function(t, e, a) {},
    9393: function(t, e, a) {
      "use strict";
      var n = a("220a"),
        s = a.n(n);
      s.a;
    },
    "98b5": function(t, e, a) {},
    "9bbb": function(t, e, a) {
      "use strict";
      var n = a("456d"),
        s = a.n(n);
      s.a;
    },
    "9d9f": function(t, e, a) {},
    a962: function(t, e, a) {
      "use strict";
      var n = a("c6f7"),
        s = a.n(n);
      s.a;
    },
    ab66: function(t, e, a) {
      "use strict";
      var n = a("e198"),
        s = a.n(n);
      s.a;
    },
    ad28: function(t, e, a) {
      "use strict";
      var n = a("1728"),
        s = a.n(n);
      s.a;
    },
    b094: function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            { staticClass: "encounter", style: t.encounterStyle },
            [
              t._l(t.combatants, function(t, e) {
                return a("Combatant", {
                  key: e,
                  attrs: { combatant: t, index: e }
                });
              }),
              a(
                "v-menu",
                {
                  attrs: { "min-width": "10em" },
                  scopedSlots: t._u([
                    {
                      key: "activator",
                      fn: function(e) {
                        var n = e.on;
                        return [
                          a(
                            "v-container",
                            t._g(
                              { staticClass: "footer", attrs: { fluid: "" } },
                              n
                            ),
                            [
                              a(
                                "v-row",
                                [
                                  t._v(" " + t._s(t.duration) + " "),
                                  a("v-spacer"),
                                  t._v(" " + t._s(t.dps) + " ")
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ];
                      }
                    }
                  ])
                },
                [
                  a(
                    "v-list",
                    {
                      staticClass: "encounter-details-style",
                      style: t.encounterDetailsStyle
                    },
                    t._l(t.encounterDetailsItems, function(e, n) {
                      return a(
                        "v-list-item",
                        { key: n, staticClass: "encounter-details-item" },
                        [
                          a(
                            "v-list-item-title",
                            { style: t.encounterDetailsItemStyle },
                            [
                              a(
                                "v-row",
                                { staticClass: "row" },
                                [
                                  a(
                                    "v-col",
                                    { staticClass: "column detail-title" },
                                    [t._v(" " + t._s(e.title) + " ")]
                                  ),
                                  a(
                                    "v-col",
                                    { staticClass: "column detail-value" },
                                    [t._v(" " + t._s(e.value) + " ")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      );
                    }),
                    1
                  )
                ],
                1
              )
            ],
            2
          );
        },
        s = [],
        r = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "container" }, [
            a(
              "div",
              { staticClass: "content" },
              [
                a(
                  "v-container",
                  { staticClass: "content-container" },
                  [
                    a(
                      "v-menu",
                      {
                        attrs: { "min-width": "10em" },
                        scopedSlots: t._u([
                          {
                            key: "activator",
                            fn: function(e) {
                              var n = e.on;
                              return [
                                a(
                                  "v-layout",
                                  t._g({ attrs: { row: "" } }, n),
                                  [
                                    a(
                                      "v-flex",
                                      {
                                        staticClass: "job-container",
                                        style: t.jobContainerStyle,
                                        attrs: { xs1: "" }
                                      },
                                      [
                                        a("div", {
                                          staticClass: "job-icon",
                                          class: { blur: t.blurIcons },
                                          style: t.jobIconStyle,
                                          domProps: {
                                            innerHTML: t._s(t.jobIcon)
                                          }
                                        })
                                      ]
                                    ),
                                    a(
                                      "v-flex",
                                      { staticClass: "info-container" },
                                      [
                                        a(
                                          "v-layout",
                                          { attrs: { column: "" } },
                                          [
                                            a(
                                              "v-flex",
                                              {
                                                staticClass: "left-info",
                                                class: { blur: t.blurNames }
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(t.combatant.name) +
                                                    " "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    a(
                                      "v-flex",
                                      { staticClass: "info-container" },
                                      [
                                        a(
                                          "v-layout",
                                          {
                                            staticClass: "right-info",
                                            attrs: { column: "" }
                                          },
                                          [
                                            a("v-flex", [
                                              t._v(" " + t._s(t.stats) + " ")
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ];
                            }
                          }
                        ])
                      },
                      [
                        a(
                          "v-list",
                          {
                            staticClass: "combatant-details-style",
                            style: t.combatantDetailsStyle
                          },
                          t._l(t.combatantDetailsItems, function(e, n) {
                            return a(
                              "v-list-item",
                              { key: n, staticClass: "combatant-details-item" },
                              [
                                a(
                                  "v-list-item-title",
                                  { style: t.combatantDetailsItemStyle },
                                  [
                                    a(
                                      "v-row",
                                      { staticClass: "row" },
                                      [
                                        a(
                                          "v-col",
                                          {
                                            staticClass: "column detail-title"
                                          },
                                          [t._v(" " + t._s(e.title) + " ")]
                                        ),
                                        a(
                                          "v-col",
                                          {
                                            staticClass: "column detail-value"
                                          },
                                          [t._v(" " + t._s(e.value) + " ")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            );
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            a("div", {
              staticClass: "percent-overlay",
              style: t.percentOverlayStyle
            })
          ]);
        },
        i = [],
        o = (a("b0c0"), a("5930")),
        c = a("4360"),
        l = {
          name: "Combatant",
          props: ["combatant"],
          computed: {
            combatantDetailsItems: function() {
              return [
                { title: this.combatant.name },
                {
                  title: this.$t("combatant.dmg-pct"),
                  value: this.combatant.dmgPct
                },
                {
                  title: this.$t("combatant.ch-pct"),
                  value: this.combatant.chPct
                },
                {
                  title: this.$t("combatant.dh-pct"),
                  value: this.combatant.dhPct
                },
                {
                  title: this.$t("combatant.cdh-pct"),
                  value: this.combatant.cdhPct
                },
                {
                  title: this.$t("combatant.heal-pct"),
                  value: this.combatant.healPct
                },
                {
                  title: this.$t("combatant.over-heal-pct"),
                  value: this.combatant.overHealPct
                },
                { title: this.$t("combatant.hps"), value: this.combatant.hps },
                {
                  title: this.$t("combatant.max-hit"),
                  value: this.combatant.maxHit
                },
                {
                  title: this.$t("combatant.deaths"),
                  value: this.combatant.deaths
                }
              ];
            },
            combatantDetailsStyle: function() {
              return {
                backgroundColor: this.$store.state.settings.backgroundColor,
                color: this.$store.state.settings.fontColor
              };
            },
            combatantDetailsItemStyle: function() {
              return {
                backgroundColor: this.$store.state.settings.backgroundColor,
                color: this.$store.state.settings.fontColor
              };
            },
            jobIcon: function() {
              return this.combatant.icon;
            },
            dmgPct: function() {
              return this.combatant.dmgPct;
            },
            damage: function() {
              return this.combatant.damage;
            },
            stats: function() {
              if (
                null == this.$store.state.settings.secondaryStat ||
                0 === this.$store.state.settings.secondaryStat
              )
                return this.combatant.dps;
              var t = this.combatant[
                c["a"].getters.additionalStats[
                  this.$store.state.settings.secondaryStat
                ].prop
              ];
              return this.combatant.dps + " [" + t + "]";
            },
            percentOverlayStyle: function() {
              return {
                width: this.combatant.percent,
                backgroundColor: this.getBarColor(this.combatant.role),
                display: this.$store.state.settings._percentBar
              };
            },
            blurNames: function() {
              return this.$store.state.settings.blurNames;
            },
            blurIcons: function() {
              return this.$store.state.settings.blurIcons;
            },
            jobIconStyle: function() {
              return { minWidth: this.$store.state.settings._iconSize };
            },
            jobContainerStyle: function() {
              return {
                padding: "0 0.4em 0 0",
                maxWidth: "28px",
                display: this.$store.state.settings._jobIconDisplay
              };
            },
            isPrimaryPlayer: function() {
              return (
                "YOU" === this.combatant.name ||
                this.combatant.name === this.$store.state.settings.primaryPlayer
              );
            }
          },
          methods: {
            getBarColor: function(t) {
              return this.$store.state.settings.percentBarYou &&
                this.isPrimaryPlayer
                ? this.$store.state.settings.percentBarColorYou
                : this.$store.state.settings.percentBarRole
                ? t === o["b"]
                  ? this.$store.state.settings.percentBarColorDps
                  : t === o["d"]
                  ? this.$store.state.settings.percentBarColorHeal
                  : t === o["e"]
                  ? this.$store.state.settings.percentBarColorTank
                  : this.$store.state.settings.percentBarColor
                : this.$store.state.settings.percentBarColor;
            }
          }
        },
        u = l,
        d = (a("b0dd"), a("2877")),
        h = a("6544"),
        m = a.n(h),
        p = a("62ad"),
        b = a("a523"),
        g = a("0e8f"),
        f = a("a722"),
        S = a("8860"),
        C = a("da13"),
        v = a("5d23"),
        D = a("e449"),
        k = a("0fd9"),
        P = Object(d["a"])(u, r, i, !1, null, "5faca18e", null),
        y = P.exports;
      m()(P, {
        VCol: p["a"],
        VContainer: b["a"],
        VFlex: g["a"],
        VLayout: f["a"],
        VList: S["a"],
        VListItem: C["a"],
        VListItemTitle: v["a"],
        VMenu: D["a"],
        VRow: k["a"]
      });
      var A = {
          name: "Encounter",
          components: { Combatant: y },
          beforeRouteEnter: function(t, e, a) {
            a(function(t) {
              t.$store.getters.inEncounter ? a() : a("/");
            });
          },
          computed: {
            encounterDetailsItems: function() {
              return [
                { title: this.$t("encounter.encounter") },
                {
                  title: this.$t("encounter.damage"),
                  value: this.$store.state.combatData.encounter.damage
                },
                {
                  title: this.$t("encounter.deaths"),
                  value: this.$store.state.combatData.encounter.deaths
                }
              ];
            },
            encounterDetailsStyle: function() {
              return {
                backgroundColor: this.$store.state.settings.backgroundColor,
                color: this.$store.state.settings.fontColor
              };
            },
            encounterDetailsItemStyle: function() {
              return {
                backgroundColor: this.$store.state.settings.backgroundColor,
                color: this.$store.state.settings.fontColor
              };
            },
            combatants: function() {
              return this.$store.state.combatData.combatants;
            },
            duration: function() {
              return (
                this.$t("encounter.duration") +
                this.$store.state.combatData.encounter.duration
              );
            },
            dps: function() {
              return (
                this.$t("encounter.dps") +
                this.$store.state.combatData.encounter.dps
              );
            },
            encounterStyle: function() {
              return {
                display: this.$store.state.settings._mainDisplay,
                backgroundColor: this.$store.state.settings.backgroundColor
              };
            }
          }
        },
        H = A,
        E = (a("f9f0"), a("a75b")),
        w = a("2fa4"),
        M = Object(d["a"])(H, n, s, !1, null, "4368b172", null);
      e["a"] = M.exports;
      m()(M, {
        VCol: p["a"],
        VContainer: b["a"],
        VContent: E["a"],
        VList: S["a"],
        VListItem: C["a"],
        VListItemTitle: v["a"],
        VMenu: D["a"],
        VRow: k["a"],
        VSpacer: w["a"]
      });
    },
    b0a0: function(t, e, a) {
      "use strict";
      var n = a("73ec"),
        s = a.n(n);
      s.a;
    },
    b0dd: function(t, e, a) {
      "use strict";
      var n = a("25f8"),
        s = a.n(n);
      s.a;
    },
    b606: function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            [
              a("ColorPicker", {
                attrs: {
                  label: "settings.background-color",
                  "initial-color": t.settings.backgroundColor
                },
                on: {
                  change: function(e) {
                    t.settings.backgroundColor = e;
                  }
                }
              }),
              a("ColorPicker", {
                attrs: {
                  label: "settings.font-color",
                  "initial-color": t.settings.fontColor
                },
                on: {
                  change: function(e) {
                    t.settings.fontColor = e;
                  }
                }
              }),
              a("Slider", {
                attrs: {
                  label: "settings.opacity",
                  min: 50,
                  max: 100,
                  "initial-slider-value": t.settings.opacity,
                  formatter: "{value}%"
                },
                on: {
                  change: function(e) {
                    t.settings.opacity = e;
                  }
                }
              }),
              a("SettingButtons", { on: { reset: t.reset, update: t.update } })
            ],
            1
          );
        },
        s = [],
        r = a("1368"),
        i = a("0124"),
        o = a("c520"),
        c = {
          name: "General",
          components: {
            ColorPicker: r["a"],
            Slider: o["a"],
            SettingButtons: i["a"]
          },
          data: function() {
            return {
              settings: {
                backgroundColor: this.$store.state.settings.backgroundColor,
                fontColor: this.$store.state.settings.fontColor,
                opacity: this.$store.state.settings.opacity
              }
            };
          },
          methods: {
            reset: function() {
              this.$emit("reset", this.settings);
            },
            update: function() {
              this.$emit("update", this.settings);
            }
          }
        },
        l = c,
        u = a("2877"),
        d = a("6544"),
        h = a.n(d),
        m = a("a75b"),
        p = Object(u["a"])(l, n, s, !1, null, null, null);
      e["a"] = p.exports;
      h()(p, { VContent: m["a"] });
    },
    bccd: function(t, e, a) {
      "use strict";
      var n = a("f841"),
        s = a.n(n);
      s.a;
    },
    c1af: function(t) {
      t.exports = JSON.parse(
        '{"header":{"title":"klondike"},"default":{"waiting":"만남을 기다리는 중...","questions":"질문 / 아이디어?","github":"github 페이지를보세요"},"encounter":{"duration":"기간 :","dps":"총계 ","encounter":"만남","damage":"손상","deaths":"죽음"},"combatant":{"dmg-pct":"DMG%","ch-pct":"CH%","dh-pct":"DH%","cdh-pct":"CDH%","heal-pct":"Heal%","over-heal-pct":"OvHeal%","hps":"HPS","max-hit":"MaxHit","deaths":"죽음"},"actions":{"view-encounter":"만남보기","reset-encounter":"재설정 발생","load-sample-data":"샘플 데이터로드","reset-all":"모두 초기화","reset":"재설정","save":"저장"},"views":{"general-style":"일반 스타일","names":"이름 스타일","numbers":"숫자 형식","job-icons":"작업 아이콘","player-details":"선수 세부 사항","percent-bar":"퍼센트 막대","percent-bar-you":"퍼센트 바 (YOU)","percent-bar-role":"퍼센트 바 (역할)","advanced":"고급"},"settings":{"language":"언어","limit-break":"제한 브레이크 포함","background-color":"배경색","font-color":"글꼴 색상","name-style":"이름 스타일","style-limit-break":"스타일 LB","blur-names":"블러 이름","abbreviate-numbers":"축약 한 숫자","precision":"정밀도","job-icons":"작업 아이콘 사용","job-icon-size":"아이콘 크기","job-icon-color":"아이콘 색상","blur-job-icons":"블러 아이콘","percent-bar":"퍼센트 막대 사용","percent-bar-mode":"퍼센트 막대 모드","percent-bar-color":"퍼센트 막대 색상","opacity":"불투명도","logging":"로깅을 사용하도록 설정","digit-sep":"숫자 분리기","decimal-sep":"소수 구분 기호","include-pets":"애완 동물 포함","include-jobless":"실업자 포함","always-show-splash":"항상 환영 표시","show-github":"GITHUB 정보 표시","percent-bar-you":"바 색상 활성화","percent-bar-color-you":"바 색상","percent-bar-role":"역할별로 막대 색상 사용","percent-bar-color-tank":"TANK 바 색상","percent-bar-color-heal":"HEALER 바 색상","percent-bar-color-dps":"DPS 바 색상","secondary-stat":"보조 통계"}}'
      );
    },
    c364: function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("router-view", {
            staticClass: "settings",
            style: t.settingsStyle,
            on: { reset: t.reset, update: t.update }
          });
        },
        s = [],
        r = a("3347"),
        i = {
          name: "Settings",
          computed: {
            settingsStyle: function() {
              return {
                display: this.$store.state.settings._mainDisplay,
                backgroundColor: this.$store.state.settings.backgroundColor,
                padding: "0.6em 0 0 0.8em"
              };
            }
          },
          methods: {
            reset: function(t) {
              this.$store.commit("reset", t),
                Object(r["a"])(this),
                this.$router.push("/");
            },
            update: function(t) {
              this.$store.commit("update", t),
                Object(r["a"])(this),
                this.$router.push("/");
            }
          }
        },
        o = i,
        c = (a("720f"), a("2877")),
        l = Object(c["a"])(o, n, s, !1, null, null, null);
      e["a"] = l.exports;
    },
    c520: function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a(
                "v-row",
                { staticClass: "row" },
                [
                  a(
                    "v-col",
                    { staticClass: "column" },
                    [a("Label", { attrs: { label: t.label } })],
                    1
                  )
                ],
                1
              ),
              a(
                "v-row",
                { staticClass: "row" },
                [
                  a(
                    "v-col",
                    { staticClass: "column" },
                    [
                      a("vue-slider", {
                        attrs: {
                          "tooltip-formatter": t.formatter,
                          tooltipStyle: t.tooltip,
                          "tooltip-placement": "bottom",
                          processStyle: t.processStyle,
                          dragOnClick: !0,
                          min: t.min,
                          max: t.max
                        },
                        on: { change: t.selectValue },
                        model: {
                          value: t.sliderValue,
                          callback: function(e) {
                            t.sliderValue = e;
                          },
                          expression: "sliderValue"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          );
        },
        s = [],
        r = (a("a9e3"), a("4e13")),
        i = a("4971"),
        o = a.n(i),
        c =
          (a("24df"),
          {
            name: "Slider",
            components: { Label: r["a"], VueSlider: o.a },
            props: {
              label: String,
              initialSliderValue: Number,
              min: Number,
              max: Number,
              formatter: String
            },
            data: function() {
              return {
                sliderValue: this.initialSliderValue,
                tooltip: {
                  backgroundColor: this.$store.state.settings.percentBarColor,
                  color: this.$store.state.settings.fontColor
                },
                processStyle: {
                  backgroundColor: this.$store.state.settings.percentBarColor
                }
              };
            },
            methods: {
              selectValue: function() {
                this.$emit("change", this.sliderValue);
              }
            }
          }),
        l = c,
        u = (a("ad28"), a("2877")),
        d = a("6544"),
        h = a.n(d),
        m = a("62ad"),
        p = a("0fd9"),
        b = Object(u["a"])(l, n, s, !1, null, "24d45d1e", null);
      e["a"] = b.exports;
      h()(b, { VCol: m["a"], VRow: p["a"] });
    },
    c6ad: function(t, e, a) {
      "use strict";
      var n = a("f650"),
        s = a.n(n);
      s.a;
    },
    c6f7: function(t, e, a) {},
    c96d: function(t, e, a) {
      "use strict";
      var n = a("9d9f"),
        s = a.n(n);
      s.a;
    },
    c9dc: function(t, e, a) {
      "use strict";
      var n = a("086d"),
        s = a.n(n);
      s.a;
    },
    df59: function(t, e, a) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-content",
            [
              a("Checkbox", {
                attrs: {
                  label: "settings.job-icons",
                  initialCheckboxValue: t.settings.jobIcons
                },
                on: {
                  change: function(e) {
                    t.settings.jobIcons = e;
                  }
                }
              }),
              a("Checkbox", {
                attrs: {
                  label: "settings.blur-job-icons",
                  initialCheckboxValue: t.settings.blurIcons
                },
                on: {
                  change: function(e) {
                    t.settings.blurIcons = e;
                  }
                }
              }),
              a("Slider", {
                attrs: {
                  label: "settings.job-icon-size",
                  min: 1,
                  max: 3,
                  "initial-slider-value": t.settings.iconSize,
                  formatter: "{value}"
                },
                on: {
                  change: function(e) {
                    t.settings.iconSize = e;
                  }
                }
              }),
              a("ColorPicker", {
                attrs: {
                  label: "settings.job-icon-color",
                  "initial-color": t.settings.iconColor
                },
                on: {
                  change: function(e) {
                    t.settings.iconColor = e;
                  }
                }
              }),
              a("SettingButtons", { on: { reset: t.reset, update: t.update } })
            ],
            1
          );
        },
        s = [],
        r = a("0124"),
        i = a("263e"),
        o = a("c520"),
        c = a("1368"),
        l = {
          name: "JobIcons",
          components: {
            Checkbox: i["a"],
            Slider: o["a"],
            ColorPicker: c["a"],
            SettingButtons: r["a"]
          },
          data: function() {
            return {
              settings: {
                jobIcons: this.$store.state.settings.jobIcons,
                blurIcons: this.$store.state.settings.blurIcons,
                iconSize: this.$store.state.settings.iconSize,
                iconColor: this.$store.state.settings.iconColor
              }
            };
          },
          methods: {
            reset: function() {
              this.$emit("reset", this.settings);
            },
            update: function() {
              this.$emit("update", this.settings);
            }
          }
        },
        u = l,
        d = a("2877"),
        h = a("6544"),
        m = a.n(h),
        p = a("a75b"),
        b = Object(d["a"])(u, n, s, !1, null, null, null);
      e["a"] = b.exports;
      m()(b, { VContent: p["a"] });
    },
    e198: function(t, e, a) {},
    edd4: function(t) {
      t.exports = JSON.parse(
        '{"header":{"title":"klondike"},"default":{"waiting":"waiting for encounter...","questions":"questions / ideas?","github":"checkout the github page"},"encounter":{"duration":"Duration: ","dps":"Total: ","encounter":"Encounter","damage":"Damage","deaths":"Deaths"},"combatant":{"dmg-pct":"DMG%","ch-pct":"CH%","dh-pct":"DH%","cdh-pct":"CDH%","heal-pct":"Heal%","over-heal-pct":"OvHeal%","hps":"HPS","max-hit":"MaxHit","deaths":"Deaths"},"actions":{"view-encounter":"View Encounter","reset-encounter":"Reset Encounter","load-sample-data":"Load Sample Data","reset-all":"Reset All","reset":"Reset","save":"Save"},"views":{"general-style":"General Style","names":"Name Style","numbers":"Number Format","player-details":"Player Details","job-icons":"Job Icons","percent-bar":"Percent Bar","percent-bar-you":"Percent Bar (YOU)","percent-bar-role":"Percent Bar (Role)","advanced":"Advanced"},"settings":{"language":"Language","limit-break":"Include Limit Break","background-color":"Background Color","font-color":"Font Color","name-style":"Name Style","style-limit-break":"Style LB","blur-names":"Blur Names","abbreviate-numbers":"Abbreviate Numbers","precision":"Precision","job-icons":"Enable Job icons","job-icon-size":"Icon Size","job-icon-color":"Icon Color","blur-job-icons":"Blur Icons","percent-bar":"Enable Percent Bar","percent-bar-mode":"Percent Bar Mode","percent-bar-color":"Percent Bar Color","opacity":"Opacity","logging":"Enable Logging","digit-sep":"Digit Separator","decimal-sep":"Decimal Separator","include-pets":"Include Pets","include-jobless":"Include Jobless","always-show-splash":"Always Show Splash","show-github":"Show GitHub Info","percent-bar-you":"Enable Color for Your Bar","percent-bar-color-you":"Your Bar Color","percent-bar-role":"Enable Bar Colors by Role","percent-bar-color-tank":"Tank Bar Color","percent-bar-color-heal":"Healer Bar Color","percent-bar-color-dps":"DPS Bar Color","secondary-stat":"Secondary Stat"}}'
      );
    },
    f4a5: function(t) {
      t.exports = JSON.parse(
        '{"header":{"title":"克朗代克"},"default":{"waiting":"等待战斗数据...","questions":"问题/想法？","github":"看看github頁面"},"encounter":{"duration":"战斗时间: ","dps":"总计:","encounter":"战斗","damage":"伤害","deaths":"死亡"},"combatant":{"dmg-pct":"伤害%","ch-pct":"暴击%","dh-pct":"直击%","cdh-pct":"直爆%","heal-pct":"治疗%","over-heal-pct":"过量%","hps":"HPS","max-hit":"最大ヒット","deaths":"死亡"},"actions":{"view-encounter":"查看战斗","reset-encounter":"重置战斗","load-sample-data":"加载样本数据","reset-all":"重置所有","reset":"重置","save":"保存"},"views":{"general-style":"常规样式","names":"名称样式（国服无效）","numbers":"数字格式","player-details":"玩家详情","job-icons":"职业图标","percent-bar":"计量条","percent-bar-you":"计量条（YOU）","percent-bar-role":"计量条（职能）","advanced":"高级"},"settings":{"language":"语言","limit-break":"包括LB","background-color":"背景色","font-color":"字体颜色","name-style":"名称样式","style-limit-break":"对LB名称生效","blur-names":"模糊名称","abbreviate-numbers":"缩略数字","precision":"精确度","job-icons":"启用职业图标","job-icon-size":"图标大小","job-icon-color":"图标颜色","blur-job-icons":"模糊图标","percent-bar":"启用计量条","percent-bar-mode":"计量条模式","percent-bar-color":"计量条颜色","opacity":"不透明度","logging":"启用记录","digit-sep":"数字分隔符","decimal-sep":"小数点分隔符","include-pets":"包括宠物","include-jobless":"包括获取不到职业的玩家","always-show-splash":"总是显示欢迎词","show-github":"显示GITHUB信息","percent-bar-you":"启用计量条颜色","percent-bar-color-you":"您的计量条颜色","percent-bar-role":"按职能套用计量条颜色","percent-bar-color-tank":"坦克计量条颜色","percent-bar-color-heal":"治疗计量条颜色","percent-bar-color-dps":"DPS计量条颜色","secondary-stat":"次要统计"}}'
      );
    },
    f650: function(t, e, a) {},
    f693: function(t) {
      t.exports = JSON.parse(
        '{"header":{"title":"klondike"},"default":{"waiting":"en attendant la rencontre...","questions":"questions / idées?","github":"regardez la page github"},"encounter":{"duration":"durée: ","dps":"Total: ","encounter":"Rencontre","damage":"Dommage","deaths":"Décès"},"combatant":{"dmg-pct":"DMG%","ch-pct":"CH%","dh-pct":"DH%","cdh-pct":"CDH%","heal-pct":"Heal%","over-heal-pct":"OvHeal%","hps":"HPS","max-hit":"MaxHit","deaths":"Décès"},"actions":{"view-encounter":"Voir la rencontre","reset-encounter":"Annuler la rencontre","load-sample-data":"Charger un échantillon","reset-all":"Effacer tout","reset":"Annuler","save":"Sauver"},"views":{"general-style":"Style général","names":"Style de nom","numbers":"Format des nombres","player-details":"Détails du joueur","job-icons":"Icônes de tâche","percent-bar":"Barre de pourcentage","percent-bar-you":"Barre de pourcentage (VOUS)","percent-bar-role":"Barre de pourcentage (rôle)","advanced":"Avancé"},"settings":{"language":"Langue","limit-break":"Inclure Transcendance","background-color":"Couleur de l\'arrière plan","font-color":"Couleur de la police","name-style":"Style de nom","style-limit-break":"Style LB","blur-names":"Noms flous","abbreviate-numbers":"Numéros abrégés","precision":"Précision","job-icons":"Activer icônes","job-icon-size":"Taille de l\'icône","job-icon-color":"Couleur de l\'icône","blur-job-icons":"Icônes de flou","percent-bar":"Activer la barre","percent-bar-mode":"Mode barre-pourcentage","percent-bar-color":"Couleur de la barre","opacity":"Opacité","logging":"Activer la journalisation","digit-sep":"Séparateur de chiffres","decimal-sep":"Séparateur décimal","include-pets":"Inclure les animaux","include-jobless":"Inclure les chômeurs","always-show-splash":"Toujours montrer la bienvenue","show-github":"Afficher les informations GitHub","percent-bar-you":"Activez la couleur de votre barre","percent-bar-color-you":"Votre couleur de barre","percent-bar-role":"Activer les couleurs des barres par rôle","percent-bar-color-tank":"Couleur de barre Tank","percent-bar-color-heal":"Couleur de barre Healer","percent-bar-color-dps":"Couleur de barre DPS","secondary-stat":"Stat secondaire"}}'
      );
    },
    f841: function(t, e, a) {},
    f9f0: function(t, e, a) {
      "use strict";
      var n = a("3098"),
        s = a.n(n);
      s.a;
    }
  }
]);
//# sourceMappingURL=app~d0ae3f07.a13a6b22.js.map
