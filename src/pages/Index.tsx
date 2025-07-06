import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const eventStats = {
    totalEvents: 47,
    activeEvents: 8,
    completedToday: 3,
    pendingReports: 12,
  };

  const navigationCards = [
    {
      title: "Состав",
      icon: "Users",
      description: "Управление командой админов",
      color: "bg-blue-500",
    },
    {
      title: "Правила мероприятий",
      icon: "BookOpen",
      description: "Регламенты и инструкции",
      color: "bg-green-500",
    },
    {
      title: "Фиксация деятельности",
      icon: "FileText",
      description: "Логи и записи действий",
      color: "bg-purple-500",
    },
    {
      title: "Еженедельная отчетность",
      icon: "Calendar",
      description: "Отчёты по неделям",
      color: "bg-orange-500",
    },
    {
      title: "ГМП",
      icon: "Shield",
      description: "Система наказаний",
      color: "bg-red-500",
    },
    {
      title: "Статистика",
      icon: "BarChart3",
      description: "Аналитика и метрики",
      color: "bg-indigo-500",
    },
    {
      title: "Оружие, скины и авто",
      icon: "Gamepad2",
      description: "Игровые предметы",
      color: "bg-yellow-500",
    },
    {
      title: "Настройки",
      icon: "Settings",
      description: "Конфигурация системы",
      color: "bg-gray-500",
    },
  ];

  const recentActivity = [
    {
      action: 'Создан ивент "Гонки на выживание"',
      admin: "AdminName",
      time: "2 мин назад",
    },
    {
      action: "Выдано наказание за нарушение",
      admin: "AdminName2",
      time: "15 мин назад",
    },
    {
      action: 'Завершён ивент "Захват территории"',
      admin: "AdminName3",
      time: "1 час назад",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">RMRP Event Admin</h1>
                <p className="text-blue-100 text-lg">
                  Панель управления ивентовыми администраторами
                </p>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className="mb-2">
                  <Icon name="Clock" size={16} className="mr-1" />
                  Онлайн
                </Badge>
                <p className="text-sm text-blue-200">
                  Сегодня: {new Date().toLocaleDateString("ru-RU")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Всего ГМП</p>
                  <p className="text-3xl font-bold">{eventStats.totalEvents}</p>
                </div>
                <Icon name="Calendar" size={40} className="text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Активных</p>
                  <p className="text-3xl font-bold">
                    {eventStats.activeEvents}
                  </p>
                </div>
                <Icon name="Play" size={40} className="text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Сегодня завершено</p>
                  <p className="text-3xl font-bold">
                    {eventStats.completedToday}
                  </p>
                </div>
                <Icon
                  name="CheckCircle"
                  size={40}
                  className="text-purple-200"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Отчёты к проверке</p>
                  <p className="text-3xl font-bold">
                    {eventStats.pendingReports}
                  </p>
                </div>
                <Icon
                  name="AlertCircle"
                  size={40}
                  className="text-orange-200"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {navigationCards.map((card, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${card.color}`}>
                    <Icon name={card.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Открыть
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Activity" size={20} />
                <span>Последняя активность</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">
                      от {activity.admin} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Zap" size={20} />
                <span>Быстрые действия</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                <Icon name="Plus" size={16} className="mr-2" />
                Создать новый ивент
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="FileText" size={16} className="mr-2" />
                Сформировать отчёт
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Users" size={16} className="mr-2" />
                Управление составом
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="BarChart3" size={16} className="mr-2" />
                Просмотреть статистику
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 text-center text-gray-500">
          <p className="text-sm">
            RMRP Event Administration System • Версия 1.0 • Работает с{" "}
            {eventStats.totalEvents} ивентами
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
