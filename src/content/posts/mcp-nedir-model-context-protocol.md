---
title: "MCP Nedir? Model Context Protocol'ü Anlamak"
date: "15 Mart 2026"
description: "Anthropic'in geliştirdiği MCP protokolü yapay zeka araçlarını nasıl dönüştürüyor?"
---

Kasım 2024'te Anthropic tarafından duyurulan Model Context Protocol (MCP), yapay zeka dünyasında bir paradigma değişikliğini temsil ediyor. Peki MCP nedir, neden bu kadar önemli ve geliştirici olarak sizi nasıl etkiliyor?

## Problem: Yapay Zeka Araçlarının Parçalı Dünyası

Bugüne kadar bir AI uygulaması geliştirmek istediğinizde büyük bir sorunla karşılaşıyordunuz: her araç ve veri kaynağı için ayrı ayrı entegrasyon kodu yazmak zorundaydınız.

GitHub'dan veri çekmek mi? Ayrı bir connector. Google Drive'a erişmek mi? Başka bir entegrasyon. Veritabanı sorguları? Yine özel kod. Bu M×N problemi olarak da bilinen durum: M sayıda AI modeli ve N sayıda araç varsa, M×N adet entegrasyon yazmanız gerekirdi.

```javascript
// MCP öncesi dünya - her entegrasyon ayrı
const githubConnector = new GitHubConnector(token);
const driveConnector = new DriveConnector(oauthToken);
const dbConnector = new DatabaseConnector(connectionString);

// Her şirket kendi standardını yazdı
// Hiçbir şey birbirleriyle konuşamazdı
```

## Çözüm: MCP'nin Client-Server Modeli

MCP, bu sorunu USB standardının fiziksel cihazlar sorununu çözdüğü gibi çözüyor. Tek bir protokol ile her araç ve her AI modeli birbirleriyle konuşabilir hale geliyor.

MCP'nin temel bileşenleri:

- **MCP Host:** AI uygulaması (Claude Desktop, Cursor, kendi uygulamanız)
- **MCP Client:** Host içinde protokolü yöneten bileşen
- **MCP Server:** Araçları ve kaynakları sunan servis (GitHub, dosya sistemi, veritabanı)

## MCP'nin Sunduğu Üç Temel Primitif

MCP, AI sistemlerine üç tür yetenek kazandırıyor:

- **Tools (Araçlar):** AI'ın çalıştırabileceği fonksiyonlar. Veritabanı sorgusu yapmak, API çağrısı göndermek, dosya oluşturmak gibi.
- **Resources (Kaynaklar):** AI'ın okuyabileceği veriler. Dosyalar, veritabanı kayıtları, web sayfaları.
- **Prompts (Şablonlar):** Yeniden kullanılabilir prompt şablonları. Sık kullanılan görevler için önceden tanımlanmış talimatlar.

## Türkiye'deki Geliştirici Topluluğu İçin Anlamı

MCP, yerli AI uygulamaları geliştirmek isteyen Türk geliştiriciler için büyük bir fırsat. Artık Claude, GPT-4 veya başka bir modelle desteklenen uygulamalarınızı standart bir protokol üzerinden verilerinize bağlayabilirsiniz.

Kurumsal veri, e-devlet sistemleri, ERP entegrasyonları — bunların hepsi MCP server olarak sarılabilir ve AI modelleriyle kullanılabilir hale getirilebilir.

## Sonuç

MCP, yapay zekanın silolarda değil, mevcut iş süreçleriyle entegre çalışmasının önünü açıyor. Bu dönüşümün erken adımlarını atmak, rekabet avantajı demek.
